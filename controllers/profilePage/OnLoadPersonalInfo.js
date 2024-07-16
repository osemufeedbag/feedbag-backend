const signUpModel = require('../../database/dbModel/signUpEmailModel');
const signUpPhoneModel = require('../../database/dbModel/signUpPhoneModel');
const farmerFarmInfo = require('../../database/dbModel/userProfile/farmerFarmInfo');


export const OnLoadPersonalInfo = async (req, res) => {
    const SessionUserId = req.params.id;
    const userDetails = await signUpModel.findOne({contact: SessionUserId}).exec();

    if(!userDetails) {
        const userDetailsPhone = await signUpPhoneModel.findOne({contact: SessionUserId}).exec();
        return userDetailsPhone;
    } else {
        return userDetails;
    };
};

export const OnLoadsFarmerFarmInfo = async (req, res) => { 
    const SessionUserId = req.params.id;
    const userDetails = await signUpModel.findOne({contact: SessionUserId}).exec();

    if(!userDetails) {
        const userDetailsPhone = await signUpPhoneModel.findOne({contact: userDetails}).exec();
        const farmDetails = await farmerFarmInfo.findOne({contact: userDetailsPhone}).exec();

    } else { 
        const farmDetails = await farmerFarmInfo.findOne({contact: SessionUserId}).exec();
        return userDetails;
    };
};