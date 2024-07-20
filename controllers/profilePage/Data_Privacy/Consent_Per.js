const UserModel = require ('../../../database/dbModel/userModel');

const consent_info = async (req, res) => {

    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    console.log(cookies.jwt);
    const refreshToken = cookies.jwt;

    const user = await UserModel.findOne({RefreshToken: refreshToken}).exec()
    if(!user) return res.sendStatus(401);

    //const option = req.params.option;
    const option = req.body.MarketingPref;
    switch (option) {
        case "Recieve marketing emails":
            user.Consent_Per.MarketingPref = option;
            const Everyoneresult = await user.save();
            console.log(Everyoneresult);
            res.json(Everyoneresult);
        break;

        case "Receive promotional offers":
            user.Consent_Per.MarketingPref = option;
            const Aggregatorsresult = await user.save();
            console.log(Aggregatorsresult);
            res.json(Aggregatorsresult);
        break;
    }
};

module.exports = {
    consent_info
};