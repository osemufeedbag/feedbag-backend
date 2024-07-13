require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const connectDB = require('./database/dbConfig/dbConn')
const verificationDocModel = require('./database/dbModel/Digital_wallet_KYC/verificationDocModel');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Connect to mongodb database
connectDB();

// To handle form data
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// built-in middleware to read json file into the server json
app.use(express.json());

app.get('/', (req, res) => {
    res.status(500).json('Welcome to feedbag agrihub server');
})

app.use('/access', require('./api/accessApi'));

// Digital wallet document verification upload start--->
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

const upload = multer({storage: storage});

app.post('/docUploads', upload.single('imageDocument'), async (req, res) => {

    const newImage = await verificationDocModel.create({
        image: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/png'
        },
    })
    .then ((err, newImage) => {
        if (err) {
            console.log(err);
        }
        else {
            newImage.save();
            res.sendStatus(200);
        }
    });
});
// Digital wallet document verification upload ends--->

mongoose.connection.once('open', () => {
    console.log("Connected to Mongodb");
    app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});
});