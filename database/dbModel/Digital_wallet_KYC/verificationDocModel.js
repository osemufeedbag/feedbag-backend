const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const verificationDocSchema = new Schema({
    "NINdata": {
        "data": {
            type: Number, 
            require: false
            },
        "verificationStatus": {
            type: Boolean, 
            require: false
            }
        },
    "image": {
        data: Buffer,
        contentType: String
        },
    "SelfieImage": {
        data: Buffer,
        contentType: String
        },
    "status": {
        "data": {type: Boolean, require: false}
    }
});

module.exports = mongoose.model('verificationDoc', verificationDocSchema);