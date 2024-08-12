const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userProfileImgSchema = new Schema({
    userId: {
        type: String, require: true
    },
    image: {
        data: Buffer
        //contentType: String
    }
});

module.exports = mongoose.model('userProfileImg', userProfileImgSchema);