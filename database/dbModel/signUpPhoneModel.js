const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const signUpPhoneSchema = new Schema({
    user: {type: String, require: true},
    fullName: {type: String, require: true},
    lastName: {type: String, require: false},
    businessLegalStatus: {type: String, require: false},
    email: {type: String, require: false},
    phone: {type: String, require: true},
    country: {type: String, require: false},
    postalCode: {type: Number, require: false},
    businessRegistrationNos: {type: String, require: false},
    address: {type: String, require: false},
    password: {type: String, require: true},
    refreshToken: {type: String, require: false}
});

module.exports = mongoose.model('signUpPhone', signUpPhoneSchema);