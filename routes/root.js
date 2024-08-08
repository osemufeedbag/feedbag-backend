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

/*router.get('/login(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','frontend','login','login.html'));
});*/
//Login ends here

//User profile starts here
router.get('/userProfile(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','frontend','usersProfile','personalInformation.html'));
});
//User profile ends here

//Digital wallet starts here
router.get('/digitalWallet(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','frontend','DigitalWallet_KYC','KYC.html'));
});
//Digital wallet KYC ends here

module.exports = router;
