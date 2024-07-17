const UserModel = require('../../database/dbModel/UserModel');


const GetPersonalInfo = async (req, res) => {
    const SessionUserId = req.params.Email;
    const PersonalInfo = await UserModel.findOne({Email: SessionUserId}).exec();
    res.json(PersonalInfo);
};

const UpdatePersonalInfo = async (req, res) => {
    const SessionUserId = req.params.Email;
    const PersonalInfo = await UserModel.findOne({Email: SessionUserId}).exec();

    if(req.body?.FirstName) PersonalInfo.FirstName = req.body.FirstName;
    if(req.body?.LastName) PersonalInfo.LastName = req.body.LastName;
    if(req.body?.Phone) PersonalInfo.Phone = req.body.Phone;
    if(req.body?.Country) PersonalInfo.Country = req.body.Country;
    if(req.body?.Address) PersonalInfo.Address = req.body.Address;
    if(req.body?.PostalCode) PersonalInfo.PostalCode = req.body.PostalCode;

    const result = await PersonalInfo.save();
    res.json(result);
};

module.exports = {
    GetPersonalInfo,
    UpdatePersonalInfo
};