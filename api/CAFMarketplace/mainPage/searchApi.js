const express = require('express');
const router = express.Router();
const SearchController = require('../../../controllers/CAFMarketPlace/mainPage/search');

router.route('/mainPage/search')
    .get(SearchController.search);

module.exports = router;