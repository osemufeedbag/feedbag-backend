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
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    console.log(cookies.jwt);
    const refreshToken = cookies.jwt;
    const EditSession = req.params.EditSession;

    const user = await UserModel.findOne({RefreshToken: refreshToken}).exec()
    if(!user) return res.sendStatus(409);

    switch (EditSession) {
        // Personal Information
        case "PersonalInfo":
            if(req.body?.FirstName) user.PersonalInfo.FirstName = req.body.FirstName;
            if(req.body?.LastName) user.PersonalInfo.LastName = req.body.LastName;
            if(req.body?.Phone) user.PersonalInfo.Phone = req.body.Phone;
            if(req.body?.Country) user.PersonalInfo.Country = req.body.Country;
            if(req.body?.Address) user.PersonalInfo.Address = req.body.Address;
            if(req.body?.PostalCode) user.PersonalInfo.PostalCode = req.body.PostalCode;

            const result1 = await user.save();

            const newActivityLog = await activityLogsModel.create({
                'UserId':user._id,
                'Date': date.format(now, 'YYYY/MM/DD HH:mm:ss').split(" ")[0],
                'ProfileUpdate': true
            });

            newActivityLog.save();
            console.log(newActivityLog);

            res.json(result1);
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
            
            newActivityLogFarmer.save();
            console.log(newActivityLogFarmer);

            const result0 = await user.save();
            res.json(result0);
        break;

        //Business Information
        case "BusinessInfo":
            if(req.body?.BusinessName) {
                user.BusinessInfo.BusinessName = req.body.BusinessName;
                
                const newBusinessName = await allCompanyNamesModel.create({
                    "BusinessName" : req.body.BusinessName
                });
                newBusinessName.save();
                console.log(newBusinessName);
            };

            if(req.body?.CompanyLocation) user.BusinessInfo.CompanyLocation = req.body.CompanyLocation;
            if(req.body?.BusinessRegistrationNos) user.BusinessInfo.BusinessRegistrationNos = req.body.BusinessRegistrationNos;

            const newActivityLogBuisness = await activityLogsModel.create({
                'UserId':user._id,
                'Date': date.format(now, 'YYYY/MM/DD HH:mm:ss').split(" ")[0],
                'ProfileUpdate': true
            });
            
            newActivityLogBuisness.save();
            console.log(newActivityLogBuisness);

            const result2 = await user.save();
            res.json(result2);

        break;

        // Billing Information
        case "BillingInfo":
            if(req.body?.CardHolder) user.BillingInfo.CardHolder = req.body.CardHolder;
            if(req.body?.CardNumber) user.BillingInfo.CardNumber = req.body.CardNumber;
            if(req.body?.PaymentMethod) user.BillingInfo.PaymentMethod = req.body.PaymentMethod;
            if(req.body?.BillingAddress) user.BillingAddress = req.body.BillingAddress;

            const result3 = await user.save();
            res.json(result3);
        break;
    };   
};

const DelAccount = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    console.log(cookies.jwt);
    const refreshToken = cookies.jwt;

    const user = await UserModel.findOne({RefreshToken: refreshToken}).exec();
};

module.exports = {
    GetPersonalInfo,
    UpdatePersonalInfo,
    DelAccount
};