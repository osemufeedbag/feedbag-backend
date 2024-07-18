const express = require('express');
const router = express.Router();
const MyInventoryController = require('../../controllers/profilePage/MyInventory');



router.route('/addInventory')
    .post(MyInventoryController.AddInventoryItem);

router.route('/allInventory')
    .get(MyInventoryController.GetUserAllItems);

module.exports = router;