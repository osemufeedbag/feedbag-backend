require('dotenv').config();
const bcrypt = require('bcrypt');
const signupModel = require('../../database/dbModel/signUpEmailModel');
const signupModelPhone = require('../../database/dbModel/signUpPhoneModel');
const jwt = require('jsonwebtoken');

//Farmer sign up logic start-->
const farmerSignup = async (req, res) => {
    const {fullName, businessLegalStatus, cont, businessRegistrationNos, pwd} = req.body;
    const status = "farmer";
    const duplicateContact = await signupModel.findOne({contact: cont}).exec();
    if (duplicateContact) return res.sendStatus(409);

    try {
        const hashedPwd = await bcrypt.hash(pwd, 10);
        const newSignup = await signupModel.create({
            user: status,
            fullName: fullName,
            businessLegalStatus: businessLegalStatus,
            contact: cont,
            businessRegistrationNos: businessRegistrationNos,
            password: hashedPwd
        })
        newSignup.save()
        res.sendStatus(200).json({
                message: 'Successful'
            });
        console.log(newSignup);

    } catch (error) {
        console.log(error);
    }
};
//Farmer sign up logic end-->

//Aggregator sign up logic start-->
const AggSignup = async (req, res) => {
    const {fullName, businessLegalStatus, cont, businessRegistrationNos, pwd} = req.body;
    const status = "aggregator";
    const duplicateContact = await signupModel.findOne({contact: cont}).exec();
    if (duplicateContact) return res.sendStatus(409);

    try {
        const hashedPwd = await bcrypt.hash(pwd, 10);
        const newSignup = await signupModel.create({
            'user': status,
            'fullName': fullName,
            'businessLegalStatus': businessLegalStatus,
            'contact': cont,
            'businessRegistrationNos': businessRegistrationNos,
            'password': hashedPwd
        })
        newSignup.save();
        console.log(newSignup);
        res.sendStatus(200).json({
                message: 'Successful'
            });
        
    } catch (error) {
        console.log(error);
    }
};
//Aggregator sign up logic end-->

//Consumer sign up logic start-->
const consumerSignup = async (req, res) => {
    const {fullName, cont, pwd} = req.body;
    const status = "consumer";
    const duplicateContact = await signupModel.findOne({contact: cont}).exec();
    if(duplicateContact) return res.sendStatus(409);

    try {
        const hashedPwd = await bcrypt.hash(pwd, 10);
        const newSignup = await signupModel.create({
            'user': status,
            'fullName': fullName,
            'contact': cont,
            'password': hashedPwd
        })
        newSignup.save();
        console.log(newSignup);
        res.sendStatus(200).json({
            message: 'Successful'
        });
        
    } catch (error) {
        console.log(error);
    }
};
//Consumer sign up logic end-->

//Login logic start-->
const logIn = async (req, res) => {
    const { cont, logInPwd } = req.body;
    if (!cont || !logInPwd) return res.status(400).json({
        'message': 'Username and password required'
    })
    const userDetails = await signupModel.findOne({contact: cont}).exec();
    if (!userDetails) {
        const userDetails = await signupModelPhone.findOne({contact: cont}).exec();
        if(!userDetails) return res.sendStatus(401);
    }
    
    console.log(userDetails);
    const match = bcrypt.compare(logInPwd, userDetails["password"]);
    if (match) {
        const accessToken = jwt.sign(
            {" userName": },
            process.env.ACCESS_TOKE_SECRET,
            {expiresIn: "30s"}
        )
    } else {
        res.sendStatus(401);
    }
    
};
//Login logic end-->

module.exports = {
    farmerSignup,
    AggSignup,
    consumerSignup,
    logIn
}