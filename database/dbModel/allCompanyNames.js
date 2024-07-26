const mongoose = require('mongoose');
//const { randomUUID } = require('crypto');
const Schema = mongoose.Schema;

const allCompanyNameSchema = new Schema({
    'companyName': [String]
});

module.exports = mongoose.model('allCompanyNamedb', allCompanyNameSchema);