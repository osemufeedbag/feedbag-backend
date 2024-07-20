const OrderModel = require('../../../database/dbModel/orderModel');
const UserModel = require('../../../database/dbModel/userModel');
const date = require('date-and-time');
const now = new Date();


const PlaceOrder = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    console.log(cookies.jwt);
    const refreshToken = cookies.jwt;

    const user = await UserModel.findOne({RefreshToken: refreshToken}).exec()
    const OrderReceiver = await UserModel.findOne({_id: req.params.id}).exec()
    if(!user) return res.sendStatus(401);

    const count = new Uint32Array(1);

    const newOrder = await OrderModel.create({
        'OrderReceiverId': OrderReceiver._id,
        'Order.Item': req.body.item,
        'Order.CustomerId': user._id,
        'Order.Date': date.format(now, 'YYYY/MM/DD HH:mm:ss').split(" ")[0],
        'Order.Quantity': req.body.quantity,
        'Order.Amount': req.body.amount,
        //'Order.TrackingId': count += Math.round((Date.now() / 1000000000) * Math.floor(Math.random() * 100)) + 1,
        'Order.TrackingId': crypto.getRandomValues(count),
        'Order.Status': "Processing"
    });
    newOrder.save();
    res.json(newOrder);
};


const GetOrderHistory = async (req, res) => {
    //const filter = req.params.filter;
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    console.log(cookies.jwt);
    const refreshToken = cookies.jwt;

    const customerUser = await UserModel.findOne({RefreshToken: refreshToken}).exec()
    const filter = customerUser.PersonalInfo.User;

    switch(filter) {
        case "Consumer":
            const customerUser = await UserModel.findOne({RefreshToken: refreshToken}).exec()
            const customerOrderHistory = await OrderModel.find({'Order.CustomerId': customerUser._id}).exec()
            if(!customerOrderHistory) return res.sendStatus(401);

            res.json(customerOrderHistory);
        break;

        case "Farmer":
            const farmerUser = await UserModel.findOne({RefreshToken: refreshToken}).exec()
            const farmerOrderHistory = await OrderModel.find({OrderReceiverId: farmerUser._id}).exec()
            if(!farmerOrderHistory) return res.sendStatus(401);

            res.json(farmerOrderHistory);
        break;

        case "Aggregator":
            const aggregatorUser = await UserModel.findOne({RefreshToken: refreshToken}).exec()
            const aggregatorOrderHistory = await OrderModel.find({OrderReceiverId: aggregatorUser._id}).exec()
            if(!aggregatorOrderHistory) return res.sendStatus(401);

            res.json(aggregatorOrderHistory);
        break;
    };
};

module.exports = {
    GetOrderHistory,
    PlaceOrder
};