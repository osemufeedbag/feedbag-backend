const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const farmer_signupSchema = new Schema({
    user: {type: String, require: true},
    fullName: {type: String, require: true},
    businessLegalStatus: {type: String, require: false},
    contact: {type: String, require: true},
    businessRegistrationNos: {type: String, require: false},
    password: {type: String, require: true}
});

module.exports = mongoose.model('farmer_signup', farmer_signupSchema);