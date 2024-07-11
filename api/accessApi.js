const express = require('express');
const router = express.Router();
const accessController = require('../controllers/access/accessApiController');


router.route('/farmerSignup')
    .post(accessController.farmerSignup);

router.route('/AggSignup')
    .post(accessController.AggSignup);

router.route('/consumerSignup')
    .post(accessController.consumerSignup);

router.route('/logIn')
    .get(accessController.logIn);


module.exports = router;