const mongoose = require('mongoose');
//const { randomUUID } = require('crypto');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    'OrderReceiverId': {type: String, require: true},
    'Order': {
            'Item': {type: String, require: true},
            'CustomerId': {type: String, require: true},
            'CustomerName': {type: String, require: true},
            'Date': {type: String, require: true},
            'Quantity': {type: String, require: true},
            'Amount': {type: String, require: true},
            'TrackingId': {type: String, require: true},
            'Status': {type: String, require: true}
    },
});

module.exports = mongoose.model('orderdb', orderSchema);