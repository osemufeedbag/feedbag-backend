require('dotenv').config();
const mongoose = require('mongoose');


const connectDB = async () => {
    try{
        await mongoose.connect("")
    } catch (err) {
        console.error(err);
}}

module.exports = connectDB