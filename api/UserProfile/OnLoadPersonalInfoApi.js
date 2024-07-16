const express = require('express');
const router = express.Router();
const OnLoadPersonalInfoController = require('../../controllers/profilePage/OnLoadPersonalInfo');
const verifyJWT = require('../../middleware/verifyJWT');


router.route('/personalInfo')
    .get(verifyJWT, OnLoadPersonalInfoController.OnLoadPersonalInfo);

router.route('/AggSignup')
    .put();

module.exports = router;