const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const signUpEmailSchema = new Schema({
    user: {type: String, require: true},
    fullName: {type: String, require: true},
    lastName: {type: String, require: false},
    businessLegalStatus: {type: String, require: false},
    email: {type: String, require: true},
    phone: {type: String, require: false},
    country: {type: String, require: false},
    postalCode: {type: Number, require: false},
    businessRegistrationNos: {type: String, require: false},
    address: {type: String, require: false},
    password: {type: String, require: true}
});

module.exports = mongoose.model('signUpEmail', signUpEmailSchema);