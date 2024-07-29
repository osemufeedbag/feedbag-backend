const express = require('express');
const router = express.Router();
const SearchController = require('../../../controllers/CAFMarketPlace/mainPage/search');
const farmersProfilesController = require('../../../controllers/CAFMarketPlace/mainPage/farmersProfiles');

router.route('/mainPage/search')
    .get(SearchController.search);

router.route('/mainPage/displayFramers')
    .get(farmersProfilesController.displayFramers);

router.route('/mainPage/displayFramers/:displayFilter')
    .get(farmersProfilesController.displayFramers);

module.exports = router;