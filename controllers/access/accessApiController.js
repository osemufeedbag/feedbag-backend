const bcrypt = require('bcrypt');
const signupModel = require('../../database/dbModel/signUpModel');

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
        newSignup.save();
        console.log(newSignup);
        res.sendStatus(200);
        
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
        res.sendStatus(200);
        
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
        res.sendStatus(200);
        
    } catch (error) {
        console.log(error);
    }
};
//Consumer sign up logic end-->

//Login logic start-->
const logIn = async (req, res) => {
    const { cont, logInPwd } = req.body;
    const userDetails = await signupModel.findOne({contact: cont}).exec();
        
    try { const valideCont = userDetails["contact"];
        if(!valideCont) return res.sendStatus(409);
        console.log(userDetails["contact"]);
        console.log(userDetails["password"]);
        console.log(userDetails);

        await bcrypt.compare(logInPwd, userDetails["password"])? res.sendStatus(200):  res.status(500).json({'message': "Bad request"});
    } catch (err) {
        res.status(500).json({'message': err.message})
    }
};
//Login logic end-->

module.exports = {
    farmerSignup,
    AggSignup,
    consumerSignup,
    logIn
}