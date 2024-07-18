const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userProfileImgSchema = new Schema({
    businessName: {
        type: String, require: false
    },
    image: {
        data: Buffer
        //contentType: String
    }
});

module.exports = mongoose.model('userProfileImg', userProfileImgSchema);