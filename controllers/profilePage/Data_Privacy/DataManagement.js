const UserModel = require ('../../../database/dbModel/userModel');
const orderModel = require('../../../database/dbModel/orderModel');

const deleteData = async (req, res) => {
    const cookies = req.headers.cookie;
    //console.log(cookies)
    const jwtToken = cookies.split("=")[1].split(";")[0];
    //console.log(jwtToken);
    if (!jwtToken) {
        console.log('app crashed at line 12: GetPersonalInfo');
        return res.sendStatus(401);
    }

    const user = await UserModel.deleteOne({RefreshToken: jwtToken}).exec()
    if(!user) return res.sendStatus(401);
    await user.save();
    
    const user1 = await orderModel.deleteOne({RefreshToken: jwtToken}).exec()
    res.json({"Message": "Account data deleted..."});
};

module.exports = {
    deleteData
};