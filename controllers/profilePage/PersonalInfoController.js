const UserModel = require('../../database/dbModel/userModel');


const GetPersonalInfo = async (req, res) => {
    //const SessionUserId = req.params.Email;
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    console.log(cookies.jwt);
    const refreshToken = cookies.jwt;

    
    const user = await UserModel.findOne({RefreshToken: refreshToken}).exec();
    //const user = await UserModel.findOne({'PersonalInfo.Email': SessionUserId}).exec();
    res.json(user);
};

const UpdatePersonalInfo = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    console.log(cookies.jwt);
    const refreshToken = cookies.jwt;

    const user = await UserModel.findOne({RefreshToken: refreshToken}).exec()

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
            res.json(result1);
        break;

        // Farm Information
        case "FarmInfo":
            if(req.body?.FarmName) user.FarmInfo.Name = req.body.FarmName;
            if(req.body?.FarmSize) user.FarmInfo.Size = req.body.FarmSize;
            if(req.body?.FarmLocation) user.FarmInfo.Location = req.body.FarmLocation;

            const result0 = await user.save();
            res.json(result0);
        break;

        //Business Information
        case "BusinessInfo":
            if(req.body?.CompanyName) user.BusinessInfo.CompanyName = req.body.CompanyName;
            if(req.body?.CompanyLocation) user.BusinessInfo.CompanyLocation = req.body.CompanyLocation;

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