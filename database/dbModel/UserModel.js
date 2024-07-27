const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
        'ActVisibility': {type: String},
        'ProfileVisibility': {type: String},
        'Consent_Per': {
            'MarketingPref': {type: String, require: false},
        },
        'PersonalInfo': {
            'User': {type: String, require: true},
            'UserName': {type: String, require: false},
            'FirstName': {type: String, require: true},
            'LastName': {type: String, require: false},
            'Email': {type: String, require: true},
            'Phone': {type: String, require: false},
            'Country': {type: String, require: false},
            'PostalCode': {type: Number, require: false},
            'Address': {type: String, require: false},
            'Password': {type: String, require: true},
            'Rating(s)': {type: Number, require: false}
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
                //'CompanyName': {type: String, require: false},
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

        'Settings': {
            'Notification': {
                'EmailNotifications': {
                    'Order_updates': {type: Boolean},
                    'Marketing_Promotions': {type: Boolean},
                    'Account_activity': {type: Boolean},
                    'Social_Interactions': {type: Boolean}
                },
                'PushNotifications': {
                    'Order_updates': {type: Boolean},
                    'Marketing_Promotion': {type: Boolean},
                    'Account_activity': {type: Boolean},
                    'Social_Interactions': {type: Boolean}
                },
                'SMSNotifications': {
                    'Order_updates': {type: Boolean},
                    'Account_activity': {type: Boolean},
                    'Security_alerts': {type: Boolean}
                }
            },
            'AdsSettings': {type: Boolean}
        },

        'RefreshToken': {type: String, require: false}
});

module.exports = mongoose.model('userdb', userSchema);