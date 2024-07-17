const express = require('express');
const router = express.Router();
const PersonalInfoController = require('../../controllers/profilePage/PersonalInfoController');
//const verifyJWT = require('../../middleware/verifyJWT');


router.route('/personalInfo/:Email')
    .get(PersonalInfoController.GetPersonalInfo);

router.route('/personalInfo/:Email')
    .put(PersonalInfoController.UpdatePersonalInfo);

module.exports = router;