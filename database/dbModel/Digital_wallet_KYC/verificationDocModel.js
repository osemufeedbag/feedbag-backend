const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const verificationDocSchema = new Schema({
    data: {
        type: Number, 
        require: false
    },
    image: {
        data: Buffer,
        contentType: String
        },
    SelfieImage: {
        data: Buffer,
        contentType: String
        }
});

module.exports = mongoose.model('verificationDoc', verificationDocSchema);