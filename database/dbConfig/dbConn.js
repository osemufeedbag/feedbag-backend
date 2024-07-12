require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.mongodb_URI)
    } catch (err) {
        console.error(err);
}}

module.exports = connectDB