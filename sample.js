

/*//Verification via phone
const phoneUrl = 'https://flickopenapi.co/kyc/phone-basic';
const phoneOptions = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    authorization: KYC_API
  },
  body: JSON.stringify({phone_number: '08127316934'})
};

fetch(phoneUrl, phoneOptions)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));*/
  

//NIN Verification
const fetch = require('node-fetch');
require('dotenv').config();

const NINUrl = 'https://flickopenapi.co/kyc/nin';
const NINOptions = {
  method: 'POST',
  headers: {
    accept: 'application/json',
    'content-type': 'application/json',
    authorization: process.env.KYC_API
  },
  body: JSON.stringify({nin: '29301274189', dob: '1992-01-07'})
};

fetch(NINUrl, NINOptions)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));