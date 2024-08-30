require('dotenv').config();
const fetch = require('node-fetch');
const UserModel = require('../../database/dbModel/userModel');
const allCompanyNamesModel = require('../../database/dbModel/allCompanyNamesModel');
const bcrypt = require('bcryptjs');
const path = require('path');
const jwt = require("jsonwebtoken");

const axios = require('axios');
const crypto = require('crypto');
const fs = require('fs');
const FormData = require('form-data');

const SUMSUB_APP_TOKEN = process.env.Token;
const SUMSUB_SECRET_KEY = process.env.secret_key;
const SUMSUB_BASE_URL = 'https://api.sumsub.com'; 

var config = {};
config.baseURL= SUMSUB_BASE_URL;

// Make sure to specify 'Content-Type' header with value of 'application/json' if you're not sending a body for most of requests

// This function creates signature for the request as described here: https://docs.sumsub.com/reference/authentication

function createSignature(config) {
  console.log('Creating a signature for the request...');

  var ts = Math.floor(Date.now() / 1000);
  const signature = crypto.createHmac('sha256',  SUMSUB_SECRET_KEY);
  signature.update(ts + config.method.toUpperCase() + config.url);

  if (config.data instanceof FormData) {
    signature.update(config.data.getBuffer());
  } else if (config.data) {
    signature.update(config.data);
  }

  config.headers['X-App-Access-Ts'] = ts;
  config.headers['X-App-Access-Sig'] = signature.digest('hex');

  return config;
}

axios.interceptors.request.use(createSignature, function (error) {
    return Promise.reject(error);
  })
// Create applicant

function createApplicant(externalUserId, levelName) {
    console.log("Creating an applicant...");
  
    var method = 'post';
    var url = '/resources/applicants?levelName=' + encodeURIComponent(levelName);
    var ts = Math.floor(Date.now() / 1000);
    
    var body = {
        externalUserId: externalUserId
    };
  
    var headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-App-Token': SUMSUB_APP_TOKEN
    };
  
    config.method = method;
    config.url = url;
    config.headers = headers;
    config.data = JSON.stringify(body);
  
    return config;
  }
  

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

                const externalUserId = newSignup._id;
                const levelName = 'basic-kyc-level';

                response = await axios(createApplicant(externalUserId, levelName))
                .then(function (response) {
                    //console.log("Response:\n", response.data);
                    return response;
                })
                .catch(function (error) {
                    console.log("Error:\n", error.response.data);
                });
                
                newSignup.applicant_KYCId = response.data.id;
                const result = await newSignup.save()

                const applicantId = response.data.id;
                console.log("ApplicantID: ", applicantId);

                return res.redirect('/successful');

              }  catch (error) {
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
                
                const externalUserId = newSignup._id;
                const levelName = 'basic-kyc-level';

                response = await axios(createApplicant(externalUserId, levelName))
                .then(function (response) {
                    //console.log("Response:\n", response.data);
                    return response;
                })
                .catch(function (error) {
                    console.log("Error:\n", error.response.data);
                });
                
                newSignup.applicant_KYCId = response.data.id;
                const result = await newSignup.save()

                const applicantId = response.data.id;
                console.log("ApplicantID: ", applicantId);

                return res.redirect('/successful');

              }  catch (error) {
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
                
                const externalUserId = newSignup._id;
                const levelName = 'basic-kyc-level';

                response = await axios(createApplicant(externalUserId, levelName))
                .then(function (response) {
                    //console.log("Response:\n", response.data);
                    return response;
                })
                .catch(function (error) {
                    console.log("Error:\n", error.response.data);
                });
                
                newSignup.applicant_KYCId = response.data.id;
                const result = await newSignup.save()

                const applicantId = response.data.id;
                console.log("ApplicantID: ", applicantId);

                return res.redirect('/successful');

              }  catch (error) {
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

                const externalUserId = newSignup._id;
                const levelName = 'basic-kyc-level';

                response = await axios(createApplicant(externalUserId, levelName))
                .then(function (response) {
                    //console.log("Response:\n", response.data);
                    return response;
                })
                .catch(function (error) {
                    console.log("Error:\n", error.response.data);
                });
                
                newSignup.applicant_KYCId = response.data.id;
                const result = await newSignup.save()

                const applicantId = response.data.id;
                console.log("ApplicantID: ", applicantId);

                return res.redirect('/successful');

              }  catch (error) {
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
                
                const externalUserId = newSignup._id;
                const levelName = 'basic-kyc-level';

                response = await axios(createApplicant(externalUserId, levelName))
                .then(function (response) {
                    //console.log("Response:\n", response.data);
                    return response;
                })
                .catch(function (error) {
                    console.log("Error:\n", error.response.data);
                });
                
                newSignup.applicant_KYCId = response.data.id;
                const result = await newSignup.save()

                const applicantId = response.data.id;
                console.log("ApplicantID: ", applicantId);

                return res.redirect('/successful');

              }  catch (error) {
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
                
                const externalUserId = newSignup._id;
                const levelName = 'basic-kyc-level';

                response = await axios(createApplicant(externalUserId, levelName))
                .then(function (response) {
                    //console.log("Response:\n", response.data);
                    return response;
                })
                .catch(function (error) {
                    console.log("Error:\n", error.response.data);
                });
                
                newSignup.applicant_KYCId = response.data.id;
                const result = await newSignup.save()

                const applicantId = response.data.id;
                console.log("ApplicantID: ", applicantId);

                return res.redirect('/successful');

              }  catch (error) {
                console.log(error);
                };
    }
}
//Sign up logic end-->

module.exports = {
    UserRegEmail,
    UserRegPhone
}
