const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const verificationDocSchema = new Schema({
    image: {
        data: Buffer, 
        contentType: String
    }
});

module.exports = mongoose.model('verificationDoc', verificationDocSchema);