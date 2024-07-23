const express = require('express');
const router = express.Router();
const OrderPageController = require('../../controllers/profilePage/Order/OrderPage');



router.route('/orderHistory')
    .get(OrderPageController.GetOrderHistory);

router.route('/totalOrder')
    .get(OrderPageController.TotalOrder);

router.route('/totalSales')
    .get(OrderPageController.TotalSales);

router.route('/topSellingProd')
    .get(OrderPageController.TopSellingProd);

router.route('/placeOrder/:id')
    .post(OrderPageController.PlaceOrder);

module.exports = router;