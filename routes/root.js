const express = require('express');
const router = express.Router();
const path = require('path');

//Sign Up starts here
router.get('/signUp(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','frontend','Farmer','signUp.html'));
});

router.get('/EmailReg(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','frontend','Farmer','EmailReg.html'));
});

router.get('/successful(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','frontend','Farmer','successful.html'));
});

router.get('/phoneSignUp(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','frontend','Farmer','phoneNosSignUp.html'));
});
//Sign Up ends here

//Login starts here
router.get('/phoneLogin(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','frontend','login','loginPhoneNos.html'));
});
//Login ends here

router.get('/digitalWallet(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname,'..','frontend','DigitalWallet_KYC','KYC.html'));
});

module.exports = router;
