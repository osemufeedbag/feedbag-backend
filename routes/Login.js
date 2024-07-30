const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/farmer1(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..','frontend','Farmer','farmer1.html'));
});


module.exports = router;
