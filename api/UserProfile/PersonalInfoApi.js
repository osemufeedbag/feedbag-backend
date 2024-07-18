const express = require('express');
const router = express.Router();
const PersonalInfoController = require('../../controllers/profilePage/personalInfoController');
const verifyJWT = require('../../middleware/verifyJWT');


router.route('/personalInfo/:Email')
    .get(verifyJWT, PersonalInfoController.GetPersonalInfo);

router.route('/personalInfo/:Email/:EditSession')
    .put(PersonalInfoController.UpdatePersonalInfo);

module.exports = router;