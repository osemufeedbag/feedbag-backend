const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/signUp(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','frontend','Farmer','signUp.html'));
});

router.get('/EmailReg(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','frontend','Farmer','EmailReg.html'));
});

router.get('/successful(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','frontend','Farmer','successful.html'));
});

router.get('/farmer4(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','frontend','Farmer','farmer4.html'));
});



module.exports = router;
