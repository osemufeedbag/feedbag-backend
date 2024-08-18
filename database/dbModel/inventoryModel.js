const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
        'UserId': {type: String, require: true},
        'Name': {type: String, require: true},
        'DateAdded': {type: String, require: true},
        'DateModeified': {type: String, require: false},
        'Price': {type: String, require: true},
        'WeightKG': {type: Number, require: true},
        'Quantity': {type: Number, require: true},
        'Description': {type: String, require: false},
        "image1": {data: Buffer, contentType: String},
        "image2": {data: Buffer, contentType: String},
        "image3": {data: Buffer, contentType: String},
        "video": {data: Buffer, contentType: String},
        'Id': {type: Number, require: true}
});

module.exports = mongoose.model('inventorydb', inventorySchema);