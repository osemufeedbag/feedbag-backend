const mongoose = require('mongoose');
//const { randomUUID } = require('crypto');
const Schema = mongoose.Schema;

const activityLogsSchema = new Schema({
    'UserId': {type: String, require: false},
    'Date': {type: String, require: false},
    'Time': {type: String, require: false},
    'Status': {type: String, require: false},
    /*'NewMsge': {type: String, require: false},
    'ItemSold':  {type: String, require: false},
    'NewInventoryAdded':  {type: String, require: false},
    'NewOrderPlaced':  {type: String, require: false},
    'NewOrderRecieved':  {type: String, require: false},
    'PwdChange':  {type: String, require: false},
    'ProfileUpdate': {type: String, require: false}*/  
});

module.exports = mongoose.model('activityLogsdb', activityLogsSchema);