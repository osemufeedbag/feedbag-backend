require('dotenv').config();

const cors = require('cors');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
//const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const connectDB = require('./database/dbConfig/dbConn')
const verificationDocModel = require('./database/dbModel/Digital_wallet_KYC/verificationDocModel');
const userProfileImgModel = require('./database/dbModel/userProfileImg/userProfileImgModel')
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const userModel = require('./database/dbModel/userModel');

const list = ['https://www.domainname.com','http://127.0.0.1:5500','http://localhost:4000'];
const corsOptions = {
    orgin: (origin, callback)=>{ 
        if(list.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error ("Not allowed by CORS"));
        }
    }, 
    optionsSuccessStatus: 200,
    Credentials: true
}

app.use(cors(corsOptions));

// Connect to mongodb database
connectDB();

//Serve static files
app.use(express.static(path.join(__dirname, '/public')));

// To handle form data
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// built-in middleware to read json file into the server json
app.use(express.json());

app.use('/access', require('./api/auth'));
app.use('/', require('./routes/root'));
app.use('/Marketplace', require('./api/CAFMarketplace/mainPage/mainPage'));
app.use('/UserProfile', require('./api/UserProfile/personalInfo'));
app.use('/Inventory', require('./api/UserProfile/inventory'));
app.use('/Order', require('./api/UserProfile/order'));

//middleware for cookies
app.use(cookieParser());

// Digital wallet document verification upload and display start--->
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

const upload = multer({
    storage: storage
});


app.post('/docUploads', upload.single("imageDocument"), async (req, res) => {
    console.log("Started");

    const NINUrl = 'https://flickopenapi.co/kyc/nin';
    const NINOptions = {
    method: 'POST',
    headers: {
        "Accept": 'application/json',
        'content-type': 'application/json',
        "Authorization": "Bearer pk-U2FsdGVkX1/g7dHW+brFBWbLifI81Hh6p2C95rQ06M7Nc/BqlY6oViCAii72ybN6Jp6DmHv6f8Frn9z32IQG6Jr5mCpIHsKr+xHHv0LK8jqvUxFRmnJypBoCT5vmkwMm",
    body: JSON.stringify({
        nin: req.body.nin, 
        dob: req.body.dob})
    }};

    fetch(NINUrl, NINOptions)
        .then(res => res.json())
        .then(data => {
            //console.log(data)
            res.json(data)
            console.log("fetching data")
            return res.json(data.status);
        })
        .catch(err => console.error('error:' + err));
});

app.post('/docUploads2', upload.array("imageDocument", 2), async (req, res) => {
    console.log(req.files);
    try {
        const newImage = await verificationDocModel.create({
        image: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.files[0].filename)),
            contentType: 'image/png'
        },
        SelfieImage: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.files[1].filename)),
            contentType: 'image/png'
        },
    });
    newImage.save();
    //console.log(newImage);
    res.status(200).send('Successful');
    } catch (error) {
        console.log(error);
    }
});

app.get('/docUploads', (req, res) => {

});

// Digital wallet document verification upload and display ends--->

// User profile picture upload and display start--->
app.post('/userProfileImgUpload', upload.single('userProfileImg'), async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    console.log(cookies.jwt);
    const refreshToken = cookies.jwt;

    const user = await userModel.findOne({RefreshToken: refreshToken}).exec()
    if(!user) return res.sendStatus(401);

    const newImage = await userProfileImgModel.create({
        "userId": user._id,
        "image": {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        },
    }) 
    .then ((err) => {
        if (err) {
            console.log(err);
        }
        else {
            res.sendStatus(200);
        }
    })
    newImage.save();
});

app.get('/getUserProfileImg', async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    console.log(cookies.jwt);
    const refreshToken = cookies.jwt;

    const user = await userModel.findOne({RefreshToken: refreshToken}).exec()
    if(!user) {
        return res.sendStatus(401) //Creat an error log database where errors like this can be logged and later rectified.
    };
    const userImage = await userProfileImgModel.findOne({userId: user._id}).exec()

    return res.send(userImage.image);
});
// User profile picture upload and display ends--->

//app.use('/refresh', require('./api/refresh'));

// Protected pages starts here
app.use(verifyJWT);
app.use('/userProfile(.html)?',(req, res) => {
    res.sendFile(path.join(__dirname, 'frontend','usersProfile','personalInformation.html'));
});


// Protected pages ends here

mongoose.connection.once('open', () => {
    console.log("Connected to Mongodb");
    app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});
});