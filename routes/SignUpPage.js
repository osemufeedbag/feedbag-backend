const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/farmer1(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','frontend','Farmer','farmer1.html'));
});

router.get('/farmer2(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','frontend','Farmer','farmer2.html'));
});

router.get('/farmer3(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','frontend','Farmer','farmer3.html'));
});

router.get('/farmer4(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','frontend','Farmer','farmer4.html'));
});



module.exports = router;
