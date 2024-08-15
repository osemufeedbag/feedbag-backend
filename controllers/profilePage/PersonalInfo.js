const UserModel = require('../../database/dbModel/userModel');
const allCompanyNamesModel = require('../../database/dbModel/allCompanyNamesModel');
const activityLogsModel = require('../../database/dbModel/activityLogs');
const date = require('date-and-time');
const now = new Date();


const GetPersonalInfo = async (req, res) => {
    const cookies = req.headers.cookie;
    const jwtToken = cookies.split("=")[1].split(";")[0];
    console.log(jwtToken);
    if (!jwtToken) {
        console.log('app crashed at line 12: GetPersonalInfo');
        return res.sendStatus(401);
    }
    const refreshToken = jwtToken;
    
    const user = await UserModel.findOne({RefreshToken: refreshToken}).exec();
    if(!user) return res.sendStatus(409);
    res.json({user});
};

const UpdatePersonalInfo = async (req, res) => {
    const cookies = req.headers.cookie;
    const jwtToken = cookies.split("=")[1].split(";")[0];
    console.log(jwtToken);
    if (!jwtToken) {
        console.log('app crashed at line 28 PersonalInfo');
        return res.sendStatus(401);
    }
    const refreshToken = jwtToken;
    const EditSession = req.params.EditSession;

    const user = await UserModel.findOne({RefreshToken: refreshToken}).exec()
    if(!user) return res.sendStatus(409);

    switch (EditSession) {
        // Personal Information
        case "PersonalInfo":
            if(req.body?.FirstName) user.PersonalInfo.FirstName = req.body.FirstName;
            if(req.body?.Phone) user.PersonalInfo.Phone = req.body.Phone;
            if(req.body?.Country) user.PersonalInfo.Country = req.body.Country;
            if(req.body?.Address) user.PersonalInfo.Address = req.body.Address;
            if(req.body?.PostalCode) user.PersonalInfo.PostalCode = req.body.PostalCode;

            await user.save();

            const newActivityLog = await activityLogsModel.create({
                'UserId':user._id,
                'Date': date.format(now, 'YYYY/MM/DD HH:mm:ss').split(" ")[0],
                'ProfileUpdate': true
            });

            await newActivityLog.save();
            res.redirect('/userProfile');

        break;

        // Farm Information
        case "FarmInfo":
            if(req.body?.FarmName) user.FarmInfo.Name = req.body.FarmName;
            if(req.body?.FarmSize) user.FarmInfo.Size = req.body.FarmSize;
            if(req.body?.FarmLocation) user.FarmInfo.Location = req.body.FarmLocation;

            const newActivityLogFarmer = await activityLogsModel.create({
                'UserId':user._id,
                'Date': date.format(now, 'YYYY/MM/DD HH:mm:ss').split(" ")[0],
                'ProfileUpdate': true
            });
            
            await user.save();
            await newActivityLogFarmer.save();
            res.redirect('/userProfile');
        break;

        //Business Information
        case "BusinessInfo":
            if(req.body?.BusinessName) {
                user.BusinessInfo.BusinessName = req.body.BusinessName;
                
                const newBusinessName = await allCompanyNamesModel.create({
                    "BusinessName" : req.body.BusinessName
                });
                await newBusinessName.save();
                //console.log(newBusinessName);
            };

            if(req.body?.CompanyLocation) user.BusinessInfo.CompanyLocation = req.body.CompanyLocation;
            if(req.body?.BusinessRegistrationNos) user.BusinessInfo.BusinessRegistrationNos = req.body.BusinessRegistrationNos;

            const newActivityLogBuisness = await activityLogsModel.create({
                'UserId':user._id,
                'Date': date.format(now, 'YYYY/MM/DD HH:mm:ss').split(" ")[0],
                'ProfileUpdate': true
            });
            await user.save();
            await newActivityLogBuisness.save(); 
            res.redirect('/userProfile');
        break;

        // Billing Information
        case "BillingInfo":
            if(req.body?.CardHolder) user.BillingInfo.CardHolder = req.body.CardHolder;
            if(req.body?.CardNumber) user.BillingInfo.CardNumber = req.body.CardNumber;
            if(req.body?.PaymentMethod) user.BillingInfo.PaymentMethod = req.body.PaymentMethod;
            if(req.body?.BillingAddress) user.BillingAddress = req.body.BillingAddress;

            await user.save();
            res.redirect('/userProfile');
        break;
    };   
};

const DelAccount = async (req, res) => {
    const cookies = req.headers.cookie;
    const jwtToken = cookies.split("=")[1].split(";")[0];
    console.log(jwtToken);
    if (!jwtToken) {
        console.log('app crashed at line 119: PersonalInfo');
        return res.sendStatus(401);
    }

    const user = await UserModel.findOne({RefreshToken: jwtToken}).exec();
};

module.exports = {
    GetPersonalInfo,
    UpdatePersonalInfo,
    DelAccount
};