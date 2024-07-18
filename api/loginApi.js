const express = require('express');
const router = express.Router();
const LoginController = require('../controllers/Authentication/LogInController');


router.route('/login')
    .post(LoginController.logIn);

module.exports = router;