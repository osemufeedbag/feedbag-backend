const express = require('express');
const router = express.Router();
const RegisterController = require('../controllers/Authentication/RegisterController');


router.route('/register/:user')
    .post(RegisterController.UserReg);

module.exports = router;