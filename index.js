require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const connectDB = require('./database/dbConfig/dbConn')
const verificationDocModel = require('./database/dbModel/Digital_wallet_KYC/verificationDocModel');
const userProfileImgModel = require('./database/dbModel/userProfileImg/userProfileImgModel')
const verifyJWT = require('./middleware/verifyJWT');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Connect to mongodb database
connectDB();

//Serve static files
app.use(express.static(path.join(__dirname, '/public')));

// To handle form data
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// built-in middleware to read json file into the server json
app.use(express.json());



app.use('/access', require('./api/auth'));
app.use('/signup', require('./routes/SignUpPage'));

app.get('/', (req, res) => {
    res.status(500).json('Welcome to feedbag agrihub server');
});


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
    try {
        const newImage = await verificationDocModel.create({
        data: req.body.nin,
        image: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        },
    });
    newImage.save();
    console.log(newImage);
    res.status(200).send('Successful');
    } catch (error) {
        console.log(error);
    }
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

    const newImage = await userProfileImgModel.create({
        businessName: req.body.businessName,
        image: {
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

app.get('/userProfileImgUpload', (req, res) => {

});
// User profile picture upload and display ends--->

// Remember to take these back to after verifyJWT
app.use('/Marketplace', require('./api/CAFMarketplace/mainPage/mainPage'));
// Remember to take these back to after verifyJWT

app.use('/refresh', require('./api/refresh'));
app.use(verifyJWT);
app.use('/UserProfile', require('./api/UserProfile/personalInfo'));
app.use('/Inventory', require('./api/UserProfile/inventory'));
app.use('/Order', require('./api/UserProfile/order'));



mongoose.connection.once('open', () => {
    console.log("Connected to Mongodb");
    app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});
});