const OrderModel = require('../../database/dbModel/orderModel');
const UserModel = require('../../database/dbModel/userModel');
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
        'Order.CustomerName': user.PersonalInfo.FirstName,
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
    const filter = req.params.filter;
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    console.log(cookies.jwt);
    const refreshToken = cookies.jwt;

    switch(filter) {
        case "consumer":
            const customerUser = await UserModel.findOne({RefreshToken: refreshToken}).exec()
            const customerOrderHistory = await OrderModel.find({'Order.CustomerId': customerUser._id}).exec()
            if(!customerOrderHistory) return res.sendStatus(401);

            res.json(customerOrderHistory);
        break;

        case "producer":
            const producerUser = await UserModel.findOne({RefreshToken: refreshToken}).exec()
            const userOrderHistory = await OrderModel.find({OrderReceiverId: producerUser._id}).exec()
            if(!userOrderHistory) return res.sendStatus(401);

            res.json(userOrderHistory);
        break;
    };
};

module.exports = {
    GetOrderHistory,
    PlaceOrder
};