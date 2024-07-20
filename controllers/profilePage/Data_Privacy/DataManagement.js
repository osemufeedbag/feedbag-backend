const UserModel = require ('../../../database/dbModel/userModel');
const orderModel = require('../../../database/dbModel/orderModel');

const deleteData = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    console.log(cookies.jwt);
    const refreshToken = cookies.jwt;

    const user = await UserModel.deleteOne({RefreshToken: refreshToken}).exec()
    if(!user) return res.sendStatus(401);
    await user.save();
    const user1 = await orderModel.deleteOne({RefreshToken: refreshToken}).exec()
    res.json({"Message": "Account data deleted..."});
};

module.exports = {
    deleteData
};