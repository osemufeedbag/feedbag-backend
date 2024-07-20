const express = require('express');
const router = express.Router();
const OrderPageController = require('../../controllers/profilePage/Order/OrderPage');



router.route('/orderHistory/:filter')
    .get(OrderPageController.GetOrderHistory);

router.route('/placeOrder/:id')
    .post(OrderPageController.PlaceOrder);

module.exports = router;