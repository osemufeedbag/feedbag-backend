const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const farmerFarmInfoSchema = new Schema({
    id: {
        type: String, require: true
    },
    farmName: {
        type: String, require: false
    },
    farmSize: {
        type: String, require: false
    },
    postalCode: {
        type: Number, require: false
    },
    farmLocation: {
        type: String, require: false
    },
    documents: {
        data: Buffer
    },
});

module.exports = mongoose.model('farmerFarmInfo', farmerFarmInfoSchema);