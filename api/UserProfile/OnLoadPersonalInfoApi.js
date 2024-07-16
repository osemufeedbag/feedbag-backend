const express = require('express');
const router = express.Router();
const OnLoadPersonalInfoController = require('../../controllers/profilePage/OnLoadPersonalInfo');


router.route('/personalInfo')
    .get(OnLoadPersonalInfoController.OnLoadPersonalInfo);

router.route('/AggSignup')
    .put();

module.exports = router;