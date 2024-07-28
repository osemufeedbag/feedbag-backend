const mongoose = require('mongoose');
//const { randomUUID } = require('crypto');
const Schema = mongoose.Schema;

const allCompanyNameSchema = new Schema({
    'UserId': {type: String, require: true},
    'BusinessName': {type: String, require: true}
});

module.exports = mongoose.model('allCompanyNamedb', allCompanyNameSchema);