const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventorySchema = new Schema({
        'UserId': {type: String, require: true},
        'AllItem': {
                 'ItemName': {type: String, require: true},
                 'DateAdded': {type: String, require: true},
                 'DateModeified': {type: String, require: false},
                 'Price': {type: String, require: true},
                 'Quantity': {type: Number, require: true},
                 'Id': {type: Number, require: true}
        },
        
});

module.exports = mongoose.model('inventorydb', inventorySchema);