require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
const mongoose = require('mongoose');
const connectDB = require('./database/dbConfig/dbConn')

// Connect to mongodb database
connectDB();

// To handle form data
app.use(express.urlencoded({extended: true}));

// built-in middleware to read json file into the server json
app.use(express.json());

app.get('/', (req, res) => {
    res.status(500).json('Welcome to feedbag agrihub server');
})

app.use('/access', require('./api/accessApi'));

mongoose.connection.once('open', () => {
    console.log("Connected to Mongodb");
    app.listen(PORT, () => {console.log(`Server is running on port ${PORT}`)});
});