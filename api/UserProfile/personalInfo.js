const express = require('express');
const router = express.Router();
const PersonalInfoController = require('../../controllers/profilePage/personalInfoController');



router.route('/personalInfo/:Email')
    .get(PersonalInfoController.GetPersonalInfo);

router.route('/personalInfo/:Email/:EditSession')
    .put(PersonalInfoController.UpdatePersonalInfo);

module.exports = router;