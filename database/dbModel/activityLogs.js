const mongoose = require('mongoose');
//const { randomUUID } = require('crypto');
const Schema = mongoose.Schema;

const activityLogsSchema = new Schema({
    'UserId': {type: String, require: false},
    'Date': {type: String, require: false},
    'NewMsge': {type: Boolean, require: false},
    'ItemSold': {type: Boolean, require: false},
    'NewInventoryAdded': {type: Boolean, require: false},
    'NewOrderPlaced': {type: Boolean, require: false},
    'NewOrderRecieved': {type: Boolean, require: false},
    'PwdChange': {type: Boolean, require: false},
    'ProfileUpdate': {type: Boolean, require: false}
    
});

module.exports = mongoose.model('activityLogsdb', activityLogsSchema);