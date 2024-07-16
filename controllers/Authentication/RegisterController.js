const UserModel = require('../../database/dbModel/UserModel');

const UserReg = async (req, res) => {
    const User = req.params.user;

    switch (User) {
        case "Farmer":

            const FarmerUser = await UserModel.findOne({Email: req.body.Email}).exec();
            if (FarmerUser) return res.sendStatus(409);

            try {
                const newSignup = await UserModel.create({
                    'User': User,
                    'FullName': req.body.FullName,
                    'LastName': req.body.LastName,
                    'Company': req.body.Company,
                    'BusinessName': req.body.BusinessName,
                    'Email': req.body.Email,
                    'BusinessRegistrationNos': req.body.BusinessRegistrationNos,
                    'Password': req.body.Password
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
                    'FullName': req.body.FullName,
                    'LastName': req.body.LastName,
                    'Company': req.body.Company,
                    'BusinessName': req.body.BusinessName,
                    'Email': req.body.Email,
                    'BusinessRegistrationNos': req.body.BusinessRegistrationNos,
                    'Password': req.body.Password
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
                    'FullName': req.body.FullName,
                    'LastName': req.body.FullName,
                    'Company': req.body.FullName,
                    'BusinessName': req.body.FullName,
                    'Email': req.body.FullName,
                    'BusinessRegistrationNos': req.body.FullName,
                    'Password': req.body.Password
                })
                newSignup.save()
                res.sendStatus(200).json({
                        message: 'Successful'
                    });
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
