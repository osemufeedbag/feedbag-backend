const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const farmerBillingInfoSchema = new Schema({
    cardHolder: {
        type: String, require: true
    },
    cardNumber: {
        type: Number, require: true
    },
    paymentMethod: {
        type: Number, require: true
    },
    billingAddress: {
        type: String, require: false
    }
});

module.exports = mongoose.model('farmerBillingInfo', farmerBillingInfoSchema);