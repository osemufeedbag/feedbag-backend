const express = require('express');
const router = express.Router();
const path = require('path');

  
//Main website starts here
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..','frontend','mainWebsite','index.html'));
});

router.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '..','frontend','mainWebsite','aboutUs.html'));
});

router.get('/cafToken', (req, res) => {
    res.sendFile(path.join(__dirname, '..','frontend','mainWebsite','CafToken.html'));
});

router.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '..','frontend','mainWebsite','contact.html'));
});

router.get('/privacy', (req, res) => {
    res.sendFile(path.join(__dirname, '..','frontend','mainWebsite','privacy.html'));
});

router.get('/cafToken', (req, res) => {
    res.sendFile(path.join(__dirname, '..','frontend','mainWebsite','CafToken.html'));
});

router.get('/blog', (req, res) => {
    res.sendFile(path.join(__dirname, '..','frontend','mainWebsite','blog.html'));
});
//Main website ends here

//Sign Up starts here
router.get('/signUp(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','frontend','Farmer','signUp.html'));
});

router.get('/signUpCon(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','frontend','Farmer','signUpConsumer.html'));
});

router.get('/EmailReg(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','frontend','Farmer','EmailReg.html'));
});

router.get('/EmailRegCon(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','frontend','Farmer','EmailRegCon.html'));
});

router.get('/successful(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','frontend','Farmer','successful.html'));
});

router.get('/phoneSignUp(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','frontend','Farmer','phoneNosSignUp.html'));
});

router.get('/conPhoneSignUp(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','frontend','Farmer','conPhoneNosSignUp.html'));
});
//Sign Up ends here

//Login starts here
router.get('/phoneLogin(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','frontend','login','loginPhoneNos.html'));
});

router.get('/loginEmail(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','frontend','login','loginEmail.html'));
});
//Login ends here

router.get('/digitalWallet(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname,'..','frontend','DigitalWallet_KYC','KYC.html'));
});

module.exports = router;
