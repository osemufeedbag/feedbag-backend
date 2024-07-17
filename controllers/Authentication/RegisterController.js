const UserModel = require('../../database/dbModel/UserModel');
const bcrypt = require('bcrypt');

const UserReg = async (req, res) => {
    const User = req.params.user;

    switch (User) {
        case "Farmer":

            const hashedPwd = await bcrypt.hash(req.body.Password, 10);
            const FarmerUser = await UserModel.findOne({Email: req.body.Email}).exec();
            if (FarmerUser) return res.sendStatus(409);

            try {
                const newSignup = await UserModel.create({
                    'User': User,
                    'FirstName': req.body.FirstName,
                    'LastName': req.body.LastName,
                    'Company': req.body.Company,
                    'BusinessName': req.body.BusinessName,
                    'Email': req.body.Email,
                    'BusinessRegistrationNos': req.body.BusinessRegistrationNos,
                    'Password': hashedPwd
                })
                newSignup.save()
                res.sendStatus(200);

                console.log(newSignup);

            } catch (error) {
                console.log(error);
            };

        break;

        case "Aggregator":

            const AggregatorUser = await UserModel.findOne({Email: req.body.email}).exec();
            if (AggregatorUser) return res.sendStatus(409);

            try {
                const newSignup = await UserModel.create({
                    'User': User,
                    'FirstName': req.body.FirstName,
                    'LastName': req.body.LastName,
                    'Company': req.body.Company,
                    'BusinessName': req.body.BusinessName,
                    'Email': req.body.Email,
                    'BusinessRegistrationNos': req.body.BusinessRegistrationNos,
                    'Password': hashedPwd
                })
                newSignup.save()
                res.sendStatus(200);
                
                console.log(newSignup);

            } catch (error) {
                console.log(error);
            }

        break;

        case "Consumer":

            const ConsumerUser = await UserModel.findOne({Email: req.body.email}).exec();
            if (ConsumerUser) return res.sendStatus(409);

            try {
                const newSignup = await UserModel.create({
                    'User': User,
                    'FirstName': req.body.FirstName,
                    'LastName': req.body.LastName,
                    'Email': req.body.Email,
                    'Password': hashedPwd
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
