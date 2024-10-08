const express = require('express');
const router = express.Router();
const MyInventoryController = require('../../controllers/profilePage/Inventory/MyInventory');



router.route('/addInventory')
    .post(MyInventoryController.AddInventoryItem);

router.route('/allInventory/:filter')
    .get(MyInventoryController.GetUserAllItems);

router.route('/outOfStock')
    .get(MyInventoryController.OutOfStock);

router.route('/lowStock')
    .get(MyInventoryController.LowStock);

router.route('/searchItem/:search')
    .get(MyInventoryController.SearchInventory);

/*router.route('/img')
    .post(MyInventoryController.img);*/
    
module.exports = router;