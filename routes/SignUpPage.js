const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/getStarted(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','frontend','Farmer','getStarted.html'));
});

router.get('/EmailReg(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','frontend','Farmer','EmailReg.html'));
});

router.get('/farmer3(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','frontend','Farmer','farmer3.html'));
});

router.get('/farmer4(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','frontend','Farmer','farmer4.html'));
});



module.exports = router;
