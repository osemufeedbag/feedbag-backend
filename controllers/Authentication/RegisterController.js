require('dotenv').config();
const fetch = require('node-fetch');
const UserModel = require('../../database/dbModel/userModel');
const allCompanyNamesModel = require('../../database/dbModel/allCompanyNamesModel');
const bcrypt = require('bcryptjs');
const path = require('path');

const UserRegEmail = async (req, res) => {
    const User = req.params.user;

    switch (User) {
        case "Farmer":
            const hashedPwd0 = await bcrypt.hash(req.body.Password, 10);
            const FarmerUser = await UserModel.findOne({'PersonalInfo.Email': req.body.Email}).exec();
            const FarmerDuplicateBusinessName = await allCompanyNamesModel.findOne({'BusinessName': req.body.BusinessName}).exec();
            /*const name = req.body.Fullname;
            const firstname = name.split(' ')[0];*/
            if (FarmerUser) return res.redirect("/EmailReg");
            if (FarmerDuplicateBusinessName) return res.sendStatus(409);

            try {
                const newSignup = await UserModel.create({
                    'PersonalInfo.User': User,
                    'PersonalInfo.FirstName': req.body.FirstName,
                    'PersonalInfo.LastName': req.body.LastName,
                    'PersonalInfo.Email': req.body.Email,
                    'BusinessInfo.Company': req.body.Company,
                    'BusinessInfo.BusinessName': req.body.BusinessName,
                    'BusinessInfo.BusinessRegistrationNos': req.body.BusinessRegistrationNos,
                    'PersonalInfo.Password': hashedPwd0
                })

                const newBusinessSignup = await allCompanyNamesModel.create({
                    'BusinessName': req.body.BusinessName,
                })

                newSignup.save()
                newBusinessSignup.save()
                
                //console.log(newSignup);
                //console.log(newBusinessSignup);
                return res.redirect('/successful');
                
            } catch (error) {
                console.log(error);
            };

        break;

        case "Aggregator":

            const hashedPwd1 = await bcrypt.hash(req.body.Password, 10);
            const AggregatorUser = await UserModel.findOne({'PersonalInfo.Email': req.body.Email}).exec();
            const AggregatorDuplicateBusinessName = await allCompanyNamesModel.findOne({'BusinessName': req.body.BusinessName}).exec();

            if (AggregatorUser) return res.redirect("/EmailReg");
            if (AggregatorDuplicateBusinessName) return res.sendStatus(409);

            try {
                const newSignup = await UserModel.create({
                    'PersonalInfo.User': User,
                    'PersonalInfo.FirstName': req.body.FirstName,
                    'PersonalInfo.LastName': req.body.LastName,
                    'BusinessInfo.Company': req.body.Company,
                    'BusinessInfo.BusinessName': req.body.BusinessName,
                    'PersonalInfo.Email': req.body.Email,
                    'BusinessInfo.BusinessRegistrationNos': req.body.BusinessRegistrationNos,
                    'PersonalInfo.Password': hashedPwd1
                })

                const newBusinessSignup = await allCompanyNamesModel.create({
                    'BusinessName': req.body.BusinessName,
                })

                newSignup.save()
                newBusinessSignup.save()
                
                //console.log(newSignup);
                //console.log(newBusinessSignup);
                return res.redirect('/successful');
                
            } catch (error) {
                console.log(error);
            };

        break;

        case "Consumer":

        const hashedPwd2 = await bcrypt.hash(req.body.Password, 10);
        const ConsumerUser = await UserModel.findOne({'PersonalInfo.Email': req.body.Email}).exec();
        const ConsumerUserName = await allCompanyNamesModel.findOne({'BusinessName': req.body.BusinessName}).exec();

            if (ConsumerUser) return res.redirect('/signUpCon');
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

                const newBusinessSignup = await allCompanyNamesModel.create({
                    'BusinessName': req.body.BusinessName,
                })

                newSignup.save()
                newBusinessSignup.save()
                
               // console.log(newSignup);
               // console.log(newBusinessSignup);
                return res.redirect('/successful');
                
            } catch (error) {
                console.log(error);
            };
    }
}

const UserRegPhone = async (req, res) => {
    const User = req.params.user;

    switch (User) {
        case "Farmer":
            const hashedPwd0 = await bcrypt.hash(req.body.Password, 10);
            const FarmerUser = await UserModel.findOne({'PersonalInfo.Phone': req.body.Phone}).exec();
            const FarmerDuplicateBusinessName = await allCompanyNamesModel.findOne({'BusinessName': req.body.BusinessName}).exec();
            /*const name = req.body.Fullname;
            const firstname = name.split(' ')[0];*/
            if (FarmerUser) return res.sendStatus(409);
            if (FarmerDuplicateBusinessName) return res.sendStatus(409);

            try {
                const newSignup = await UserModel.create({
                    'PersonalInfo.User': User,
                    'PersonalInfo.FirstName': req.body.FirstName,
                    'PersonalInfo.LastName': req.body.LastName,
                    'PersonalInfo.Phone': req.body.Phone,
                    'BusinessInfo.Company': req.body.Company,
                    'BusinessInfo.BusinessName': req.body.BusinessName,
                    'BusinessInfo.BusinessRegistrationNos': req.body.BusinessRegistrationNos,
                    'PersonalInfo.Password': hashedPwd0
                })

                const newBusinessSignup = await allCompanyNamesModel.create({
                    'BusinessName': req.body.BusinessName,
                })

                newSignup.save()
                newBusinessSignup.save()
               // console.log(newSignup);
              //  console.log(newBusinessSignup);
              
                return res.redirect('/successful');   

            } catch (error) {
                console.log(error);
            };
        break;

        case "Aggregator":

            const hashedPwd1 = await bcrypt.hash(req.body.Password, 10);
            const AggregatorUser = await UserModel.findOne({'PersonalInfo.Phone': req.body.Phone}).exec();
            const AggregatorDuplicateBusinessName = await allCompanyNamesModel.findOne({'BusinessName': req.body.BusinessName}).exec();

            if (AggregatorUser) return res.sendStatus(409);
            if (AggregatorDuplicateBusinessName) return res.sendStatus(409);

            try {
                const newSignup = await UserModel.create({
                    'PersonalInfo.User': User,
                    'PersonalInfo.FirstName': req.body.FirstName,
                    'PersonalInfo.LastName': req.body.LastName,
                    'BusinessInfo.Company': req.body.Company,
                    'BusinessInfo.BusinessName': req.body.BusinessName,
                    'PersonalInfo.Phone': req.body.Phone,
                    'BusinessInfo.BusinessRegistrationNos': req.body.BusinessRegistrationNos,
                    'PersonalInfo.Password': hashedPwd1
                })

                const newBusinessSignup = await allCompanyNamesModel.create({
                    'BusinessName': req.body.BusinessName,
                })

                newSignup.save()
                newBusinessSignup.save()
                
                //console.log(newSignup);
               // console.log(newBusinessSignup);
                return res.redirect('/successful');
                
            } catch (error) {
                console.log(error);
            };

        break;

        case "Consumer":

        const hashedPwd2 = await bcrypt.hash(req.body.Password, 10);
        const ConsumerUser = await UserModel.findOne({'PersonalInfo.Phone': req.body.Phone}).exec();
        const ConsumerUserName = await allCompanyNamesModel.findOne({'BusinessName': req.body.BusinessName}).exec();

            if (ConsumerUser) return res.sendStatus(409);
            if (ConsumerUserName) return res.sendStatus(409);

            try {
                const newSignup = await UserModel.create({
                    'PersonalInfo.User': User,
                    'PersonalInfo.UserName': req.body.UserName,
                    'PersonalInfo.FirstName': req.body.FirstName,
                    'PersonalInfo.LastName': req.body.LastName,
                    'PersonalInfo.Phone': req.body.Phone,
                    'PersonalInfo.Password': hashedPwd2
                })
                
                const newBusinessSignup = await allCompanyNamesModel.create({
                    'BusinessName': req.body.BusinessName,
                })

                newSignup.save()
                newBusinessSignup.save()
                
               // console.log(newSignup);
                //console.log(newBusinessSignup);
                return res.redirect('/successful');
                
            } catch (error) {
                console.log(error);
            };
    }
}
//Sign up logic end-->

module.exports = {
    UserRegEmail,
    UserRegPhone
}
