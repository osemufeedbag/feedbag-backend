const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/Authentication/LogInController');
const RegisterController = require('../controllers/Authentication/RegisterController');
const logOutController = require('../controllers/Authentication/logOutController');


router.route('/register/:user')
    .post(RegisterController.UserReg);

router.route('/login')
    .post(LoginController.logIn);
    
router.route('/logout')
    .post(logOutController.LogOut);

module.exports = router;