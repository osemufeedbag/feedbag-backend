const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/Authentication/LogInController');
const RegisterController = require('../controllers/Authentication/RegisterController');
const logOutController = require('../controllers/Authentication/logOutController');


router.route('/eRegister/:user')
    .post(RegisterController.UserRegEmail);

router.route('/pRegister/:user')
    .post(RegisterController.UserRegPhone);

router.route('/elogin')
    .post(LoginController.eLogin);

router.route('/plogin')
    .post(LoginController.pLogin);
    
router.route('/logout')
    .get(logOutController.LogOut);

module.exports = router;