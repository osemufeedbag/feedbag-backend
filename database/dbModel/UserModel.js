const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const inventorySchema = ({
    'ItemName': {type: String, require: false, default: {}},
    'DateAdded': {type: Date, require: false, default: {}},
    'Price': {type: String, require: false, default: {}},
    'Quantity': {type: Number, require: false, default: {}},
    'OutOfStock': {type: Boolean, require: false, default: {}},
    'LowStock': {type: Boolean, require: false, default: {}}
}) 

const userSchema = new Schema({
        'PersonalInfo': {
            'User': {type: String, require: true},
            'FirstName': {type: String, require: true},
            'LastName': {type: String, require: false},
            'Email': {type: String, require: true},
            'Phone': {type: String, require: false},
            'Country': {type: String, require: false},
            'PostalCode': {type: Number, require: false},
            'Address': {type: String, require: false},
            'Password': {type: String, require: true}
        },
        
        'FarmInfo': {
            'Name': {type: String, require: false},
            'Size': {type: String, require: false},
            'Location': {type: String, require: false},
            'InfoDocument': {
                data: Buffer
                //contentType: String
                }
        },
        
        'BusinessInfo': {
                'CompanyName': {type: String, require: false},
                'CompanyLocation': {type: String, require: false},
                'BusinessRegistrationNos': {type: Number, require: false},
                'Company': {type: String, require: false},
                'BusinessName': {type: String, require: false},
        },
        

        'BillingInfo': {
            'CardHolder': {type: String, require: false},
            'CardNumber': {type: Number, require: false},
            'PaymentMethod': {type: String, require: false},
            'BillingAddress': {type: String, require: false}
        },

        'Inventory': {
            'AllItems': [inventorySchema],
            'OutOfStock': [inventorySchema],
            'LowStock': [inventorySchema]
        },

        'RefreshToken': {type: String, require: false}
});

module.exports = mongoose.model('userdb', userSchema);