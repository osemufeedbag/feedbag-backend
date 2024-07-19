const express = require('express');
const router = express.Router();
const OrderPageController = require('../../controllers/profilePage/OrderPage');



router.route('/orderHistory')
    .get(OrderPageController.GetOrderHistory);

router.route('/placeOrder')
    .post(OrderPageController.PlaceOrder);

module.exports = router;