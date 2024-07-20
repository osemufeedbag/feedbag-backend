const express = require('express');
const router = express.Router();
const PersonalInfoController = require('../../controllers/profilePage/personalInfo');
const DataManagementController = require('../../controllers/profilePage/Data_Privacy/DataManagement')
const Consent_PerController = require('../../controllers/profilePage/Data_Privacy/Consent_Per')



router.route('/personalInfo/:Email')
    .get(PersonalInfoController.GetPersonalInfo);

router.route('/personalInfo/:Email/:EditSession')
    .put(PersonalInfoController.UpdatePersonalInfo);

router.route('/consentOption')
    .put(Consent_PerController.consent_info);

router.route('/deletAccount')
    .delete(DataManagementController.deleteData);

module.exports = router;