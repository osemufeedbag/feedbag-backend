const OrderModel = require('../../database/dbModel/orderModel');
const UserModel = require('../../database/dbModel/userModel');

const PlaceOrder = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    console.log(cookies.jwt);
    const refreshToken = cookies.jwt;

    const user = await UserModel.findOne({RefreshToken: refreshToken}).exec()
    const OrderReceiver = await UserModel.findOne({_id: req.params.id}).exec()
    if(!user) return res.sendStatus(401);

    const newOrder = await OrderModel.create({
        'OrderReceiverId': OrderReceiver,
        'Order.Item': req.body.item,
        'Order.CustomerId': user._id,
        'Order.CustomerName': user.PersonalInfo.FirstName,
        'Order.Date': req.body.date,
        'Order.Quantity': req.body.quantity,
        'Order.Amount': req.body.amount,
        'Order.Status': "Processing"
    });
    newOrder.save();
    res.json(newOrder);
};


const GetOrderHistory = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    console.log(cookies.jwt);
    const refreshToken = cookies.jwt;

    const user = await UserModel.findOne({RefreshToken: refreshToken}).exec()
    const userOrderHistory = await OrderModel.findOne({OrderReceiverId: user._id}).exec()
    if(!userOrderHistory) return res.sendStatus(401);

    res.json(userOrderHistory);
};

module.exports = {
    GetOrderHistory,
    PlaceOrder
};