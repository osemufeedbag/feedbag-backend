const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    'User': {type: String, require: true},
    'FullName': {type: String, require: true},
    'LastName': {type: String, require: false},
    'Company': {type: String, require: false},
    'BusinessName': {type: String, require: false},
    'Email': {type: String, require: true},
    'Phone': {type: String, require: false},
    'Country': {type: String, require: false},
    'PostalCode': {type: Number, require: false},
    'BusinessRegistrationNos': {type: Number, require: false},
    'Address': {type: String, require: false},
    'Password': {type: String, require: true},
    'RefreshToken': {type: String, require: false}
});

module.exports = mongoose.model('userdb', userSchema);