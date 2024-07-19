const express = require('express');
const router = express.Router();
const MyInventoryController = require('../../controllers/profilePage/MyInventory');



router.route('/addInventory')
    .post(MyInventoryController.AddInventoryItem);

router.route('/allInventory')
    .get(MyInventoryController.GetUserAllItems);

router.route('/outOfStock')
    .get(MyInventoryController.OutOfStock);

router.route('/lowStock')
    .get(MyInventoryController.LowStock);

module.exports = router;