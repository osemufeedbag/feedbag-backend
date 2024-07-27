const UserModel = require('../../database/dbModel/userModel');
const bcrypt = require('bcrypt');

const UserReg = async (req, res) => {
    const User = req.params.user;

    switch (User) {
        case "Farmer":

            const hashedPwd0 = await bcrypt.hash(req.body.Password, 10);
            const FarmerUser = await UserModel.findOne({'PersonalInfo.Email': req.body.Email}).exec();
            const FarmerDuplicateBusinessName = await UserModel.findOne({'PersonalInfo.BusinessName': req.body.BusinessName}).exec();
            /*const name = req.body.Fullname;
            const firstname = name.split(' ')[0];*/
            if (FarmerUser) return res.sendStatus(409);
            if (FarmerDuplicateBusinessName) return res.sendStatus(409);

            try {
                const newSignup = await UserModel.create({
                    'PersonalInfo.User': User,
                    'PersonalInfo.FirstName': req.body.FirstName,
                    'PersonalInfo.LastName': req.body.LastName,
                    'PersonalInfo.Company': req.body.Company,
                    'PersonalInfo.BusinessName': req.body.BusinessName,
                    'PersonalInfo.Email': req.body.Email,
                    'PersonalInfo.BusinessRegistrationNos': req.body.BusinessRegistrationNos,
                    'PersonalInfo.Password': hashedPwd0
                })
                newSignup.save()
                res.sendStatus(200);

                console.log(newSignup);

            } catch (error) {
                console.log(error);
            };

        break;

        case "Aggregator":

            const hashedPwd1 = await bcrypt.hash(req.body.Password, 10);
            const AggregatorUser = await UserModel.findOne({'PersonalInfo.Email': req.body.email}).exec();
            const AggregatorDuplicateBusinessName = await UserModel.findOne({'PersonalInfo.BusinessName': req.body.BusinessName}).exec();
            if (AggregatorUser) return res.sendStatus(409);
            if (AggregatorDuplicateBusinessName) return res.sendStatus(409);

            try {
                const newSignup = await UserModel.create({
                    'PersonalInfo.User': User,
                    'PersonalInfo.FirstName': req.body.FirstName,
                    'PersonalInfo.LastName': req.body.LastName,
                    'PersonalInfo.Company': req.body.Company,
                    'PersonalInfo.BusinessName': req.body.BusinessName,
                    'PersonalInfo.Email': req.body.Email,
                    'PersonalInfo.BusinessRegistrationNos': req.body.BusinessRegistrationNos,
                    'PersonalInfo.Password': hashedPwd1
                })
                newSignup.save()
                res.sendStatus(200);
                
                console.log(newSignup);

            } catch (error) {
                console.log(error);
            }

        break;

        case "Consumer":

        const hashedPwd2 = await bcrypt.hash(req.body.Password, 10);
        const ConsumerUser = await UserModel.findOne({'PersonalInfo.Email': req.body.email}).exec();
        const ConsumerUserName = await UserModel.findOne({'PersonalInfo.UserName': req.body.UserName}).exec();
            if (ConsumerUser) return res.sendStatus(409);
            if (ConsumerUserName) return res.sendStatus(409);

            try {
                const newSignup = await UserModel.create({
                    'PersonalInfo.User': User,
                    'PersonalInfo.UserName': req.body.UserName,
                    'PersonalInfo.FirstName': req.body.FirstName,
                    'PersonalInfo.LastName': req.body.LastName,
                    'PersonalInfo.Email': req.body.Email,
                    'PersonalInfo.Password': hashedPwd2
                })
                newSignup.save()
                res.sendStatus(200)
                console.log(newSignup);

            } catch (error) {
                console.log(error);
            }
    }
}
//Sign up logic end-->

module.exports = {
    UserReg
}
