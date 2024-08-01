const express = require('express');
const router = express.Router();
const path = require('path');

/*router.get('/', (req, res) => {
    res.status(500).json('Welcome to feedbag agrihub server');
});*/

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

router.get('/phoneLogin(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','frontend','login','loginPhoneNos.html'));
});

module.exports = router;
