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
        //cb(null, file.fieldname + '-' + Date.now())
        cb(null, file.originalname)
    }
});

const upload = multer({
    storage: storage
});


app.post('/docUploads', upload.single("imageDocument"), async (req, res) => {
    console.log("Started");

    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    console.log(cookies.jwt);
    const refreshToken = cookies.jwt;

    const user = await userModel.findOne({RefreshToken: refreshToken}).exec()
    if(!user) return res.sendStatus(401);

    const NINUrl = 'https://flickopenapi.co/kyc/nin';
    const NINOptions = {
    method: 'POST',
    headers: {
        "Accept": 'application/json',
        'content-type': 'application/json',
        "Authorization": process.env.KYC_API,
    body: JSON.stringify({
        nin: req.body.nin, 
        dob: req.body.dob})
    }};

    fetch(NINUrl, NINOptions)
        .then(res => res.json())
        .then(async data =>  {
            //Update NINdata status
            const newImage = await verificationDocModel.create({
                "userId": user._id,
                "NINdata.data": req.body.nin,
                "NINdata.verificationStatus": data.status,
                "image": {
                    data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.files[0].filename)),
                    //data: req.file.filename,
                    contentType: 'image/png'
                }
            });
            newImage.save();
            /*fs.unlink(path.join(__dirname + '/uploads/' + req.files[0].filename), (err) => {
                if (err) throw err;
                console.log('Image deleted');
              });*/
            console.log("fetched data")
            return res.json(data);
        })
        .catch(err => console.error('error:' + err));
});

app.post('/docUploads2', upload.array("imageDocument", 2), async (req, res) => {
    console.log(req.files);

    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    console.log(cookies.jwt);
    const refreshToken = cookies.jwt;

    const user = await userModel.findOne({RefreshToken: refreshToken}).exec()
    if(!user) return res.sendStatus(401);

    try {
        const newImage = await verificationDocModel.create({
        "userId": user._id,
        "image": {
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
    console.log(req);
    const cookies = req.headers.cookie;
    const jwtToken = cookies.split("=")[1].split(";")[0];
    console.log(jwtToken);
    if (!jwtToken) {
        console.log('app crashed at line 119: PersonalInfo');
        return res.sendStatus(401);
    }
    const refreshToken = jwtToken;

    const user = await userModel.findOne({RefreshToken: refreshToken}).exec()
    const imageSearch = await userProfileImgModel.findOne({userId: user._id}).exec()
    if(!user) return res.sendStatus(401);
    console.log('User was found');

    if(imageSearch) {
        imageSearch.image.data = fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename));
        await imageSearch.save();
        fs.unlink(path.join(__dirname + '/uploads/' + req.file.filename), (err) => {
            if (err) throw err;
            console.log('Image deleted');
          });
        return  res.status(200).json({ success: true, message: 'Successfully' });
    } else {
        const newImage = await userProfileImgModel.create({
            "userId": user._id,
            "image": {
                data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
                contentType: req.file.mimetype
            }
        })
        await newImage.save();
        console.log(newImage);
        fs.unlink(path.join(__dirname + '/uploads/' + req.file.filename), (err) => {
            if (err) throw err;
            console.log('Image deleted');
          });
          
        return  res.status(200).json({ success: true, message: 'Image uploaded successfully' });
    }
});

app.get('/getuserProfileImg', async (req, res) => {
    const cookies = req.headers.cookie;
    const jwtToken = cookies.split("=")[1].split(";")[0];
    console.log(jwtToken);
    if (!jwtToken) {
        console.log('app crashed at line 119: PersonalInfo');
        return res.sendStatus(401);
    }
    const user = await userModel.findOne({RefreshToken: jwtToken}).exec()
    if(!user) {
        return res.sendStatus(401) //Creat an error log database where errors like this can be logged and later rectified.
    };
    const userImage = await userProfileImgModel.findOne({userId: user._id}).exec()
    if(userImage) {
        const imageData = userImage.image.data.toString('base64');
        const imageContentType = userImage.image.contentType;
        return res.json({image: {data: imageData, contentType: imageContentType}});
    } else {
        return res.status(404).json({error: 'Image not found'});
    }
});
// User profile picture upload and display ends--->

//app.use('/refresh', require('./api/refresh'));

// Protected pages starts here
app.use(verifyJWT);
app.use('/userProfile',(req, res) => {
    res.sendFile(path.join(__dirname, 'frontend','usersProfile','personalInformation.html'));
});


// Protected pages ends here

mongoose.connection.once('open', () => {
    console.log("Connected to Mongodb");
    app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});
});