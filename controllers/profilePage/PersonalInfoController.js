const UserModel = require('../../database/dbModel/userModel');


const GetPersonalInfo = async (req, res) => {
    const SessionUserId = req.params.Email;
    const user = await UserModel.findOne({Email: SessionUserId}).exec();
    res.json(user);
};

const UpdatePersonalInfo = async (req, res) => {
    const SessionUserId = req.params.Email;
    const EditSession = req.params.EditSession;
    const user = await UserModel.findOne({Email: SessionUserId}).exec();

    switch (EditSession) {
        // Personal Information
        case "PersonalInfo":
            if(req.body?.FirstName) user.FirstName = req.body.FirstName;
            if(req.body?.LastName) user.LastName = req.body.LastName;
            if(req.body?.Phone) user.Phone = req.body.Phone;
            if(req.body?.Country) user.Country = req.body.Country;
            if(req.body?.Address) user.Address = req.body.Address;
            if(req.body?.PostalCode) user.PostalCode = req.body.PostalCode;

            const result1 = await user.save();
            res.json(result1);
        break;

        // Farm Information
        case "FarmInfo":
            if(req.body?.FarmName) user.FarmName = req.body.FarmName;
            if(req.body?.FarmSize) user.FarmSize = req.body.FarmSize;
            if(req.body?.FarmLocation) user.FarmLocation = req.body.FarmLocation;

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
            if(req.body?.CardHolder) user.BillingInfo_CardHolder = req.body.CardHolder;
            if(req.body?.CardNumber) user.BillingInfo_CardNumber = req.body.CardNumber;
            if(req.body?.PaymentMethod) user.BillingInfo_PaymentMethod = req.body.PaymentMethod;
            if(req.body?.BillingAddress) user.BillingAddress = req.body.BillingAddress;

            const result3 = await user.save();
            res.json(result3);
        break;
    };   
};

const DelPersonalInfo = async (req, res) => {
    const SessionUserId = req.params.Email;
    const user = await UserModel.findOne({Email: SessionUserId}).exec();
    res.json(user);
};

module.exports = {
    GetPersonalInfo,
    UpdatePersonalInfo,
    DelPersonalInfo
};