const inventoryModel = require('../../../database/dbModel/inventoryModel');
const UserModel = require('../../../database/dbModel/userModel');

const TotalProducts = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    console.log(cookies.jwt);
    const refreshToken = cookies.jwt;

    const user = await UserModel.findOne({RefreshToken: refreshToken}).exec()
    const userTotal = await UserModel.findOne({RefreshToken: refreshToken}).exec()
    if(!user) return res.sendStatus(401);

    res.json(user)
};

module.exports = {
    TotalProducts
};