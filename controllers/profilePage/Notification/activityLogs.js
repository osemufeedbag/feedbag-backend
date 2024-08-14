const UserModel = require('../../../database/dbModel/userModel');
const activityLogsModel = require('../../../database/dbModel/activityLogs');


const activity = async (req, res) => {
    const cookies = req.headers.cookie;
    const jwtToken = cookies.split("=")[1].split(";")[0];
    console.log(jwtToken);
    if (!jwtToken) {
        console.log('app crashed at line 12: activityLogs');
        return res.sendStatus(401);
    }
    const refreshToken = jwtToken;
    const user = await UserModel.findOne({RefreshToken: refreshToken}).exec();
    if(!user) return res.sendStatus(409);

    const userActivity = await activityLogsModel.find({UserId: user._id}).exec();
    if(!userActivity) return res.sendStatus(409);

    res.json({userActivity});
};

module.exports = {
    activity
}