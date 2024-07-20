const UserModel = require ('../../../database/dbModel/userModel');

const profileVisibility = async (req, res) => {

    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    console.log(cookies.jwt);
    const refreshToken = cookies.jwt;

    const user = await UserModel.findOne({RefreshToken: refreshToken}).exec()
    if(!user) return res.sendStatus(401);

    const option = req.params.option;
    switch (option) {
        case "Everyone":
            user.ProfileVisibility = option;
            const Everyoneresult = user.save();
            console.log(Everyoneresult);
        break;

        case "Aggregators":
            user.ProfileVisibility = option;
            const Aggregatorsresult = user.save();
            console.log(Aggregatorsresult);
        break;

        case "Farmers":
            user.ProfileVisibility = option;
            const Farmersresult = user.save();
            console.log(Farmersresult);
        break;
    }
};

const actVisibility = async (req, res) => {

    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    console.log(cookies.jwt);
    const refreshToken = cookies.jwt;

    const user = await UserModel.findOne({RefreshToken: refreshToken}).exec()
    if(!user) return res.sendStatus(401);

    const option = req.params.option;
    switch (option) {
        case "Everyone":
            user.ActVisibility = option;
            const Everyoneresult = user.save();
            console.log(Everyoneresult);
        break;

        case "Aggregators":
            user.ActVisibility = option;
            const Aggregatorsresult = user.save();
            console.log(Aggregatorsresult);
        break;

        case "Farmers":
            user.ActVisibility = option;
            const Farmersresult = user.save();
            console.log(Farmersresult);
        break;
    }
};

module.exports = {
    profileVisibility,
    actVisibility
};