const express = require('express');
const router = express.Router();
const accessController = require('../controllers/access/accessApiController');


router.route('/getItemOwner')
    .get();


module.exports = router;