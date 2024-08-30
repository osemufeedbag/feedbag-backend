const UserModel = require('../../database/dbModel/userModel');
const allCompanyNamesModel = require('../../database/dbModel/allCompanyNamesModel');
const activityLogsModel = require('../../database/dbModel/activityLogs');
const date = require('date-and-time');
const now = new Date();


const GetPersonalInfo = async (req, res) => {
    const cookies = req.headers.cookie;
    //console.log(cookies)
    const jwtToken = cookies.split("=")[1].split(";")[0];
    //console.log(jwtToken);
    if (!jwtToken) {
        console.log('app crashed at line 12: GetPersonalInfo');
        return res.sendStatus(401);
    }
    const refreshToken = jwtToken;
    
    const user = await UserModel.findOne({RefreshToken: refreshToken}).exec();
    if(!user) return  res.redirect('/userProfile') //res.sendStatus(409);
    res.json({user});
};

const UpdatePersonalInfo = async (req, res) => {
    const cookies = req.headers.cookie;
    const jwtToken = cookies.split("=")[1].split(";")[0];
    //console.log(jwtToken);
    if (!jwtToken) {
        console.log('app crashed at line 28 PersonalInfo');
        //return res.sendStatus(401);
        return res.redirect('/userProfile');
    }
    const refreshToken = jwtToken;
    const EditSession = req.params.EditSession;

    const user = await UserModel.findOne({RefreshToken: refreshToken}).exec()
    if(!user) return  res.redirect('/userProfile') //res.sendStatus(409);

    switch (EditSession) {
        // Personal Information
        case "PersonalInfo":
            if(req.body?.FirstName) user.PersonalInfo.FirstName = req.body.FirstName;
            if(req.body?.Phone) user.PersonalInfo.Phone = req.body.Phone;
            if(req.body?.Country) user.PersonalInfo.Country = req.body.Country;
            if(req.body?.Address) user.PersonalInfo.Address = req.body.Address;
            if(req.body?.PostalCode) user.PersonalInfo.PostalCode = req.body.PostalCode;

            await user.save();
            console.log('saving info...')

            const newActivityLog = await activityLogsModel.create({
                'UserId':user._id,
                'Date': date.format(now, 'YYYY/MM/DD HH:mm:ss').split(" ")[0],
                'ProfileUpdate': true
            });

            await newActivityLog.save();
            console.log('saving logs...')
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

        case "ProfileVisibility":
            //console.log(req.body)
            try {
                if(req.body?.ProfileVis) {
                    user.ProfileVisibility = req.body.ProfileVis;
                    await user.save();
                    //console.log('Changed');
                    //res.redirect('/userProfile');
                }
            } catch (error) {
                console.error('Failed to update user:', error);
            }  
        break;

        case "ActVisibility":
            //console.log(req.body)
            try {
                if(req.body?.activityVis) {
                    user.ActVisibility = req.body.activityVis;
                    await user.save();
                    //console.log('Changed');
                    //res.redirect('/userProfile');
                }
            } catch (error) {
                console.error('Failed to update user:', error);
            }  
        break;
    }
};

const getActVisibility = async (req, res) => {
    const cookies = req.headers.cookie;
    const jwtToken = cookies.split("=")[1].split(";")[0];
    //console.log(jwtToken);
    if (!jwtToken) {
        console.log('app crashed at line 28 PersonalInfo');
        //return res.sendStatus(401);
        return res.redirect('/');
    }
    const refreshToken = jwtToken;

    const user = await UserModel.findOne({RefreshToken: refreshToken}).exec()
    if(!user) return  res.redirect('/userProfile') //res.sendStatus(409);
    try { 
        const result = {} 
        result.activityVis = user.ActVisibility
        result.profileVis = user.ProfileVisibility
        return res.json(result);
        //console.log(result)

    } catch (error) {
        console.error('Failed to update user:', error);
    }  
};

const Settings = async (req, res) => {
    const cookies = req.headers.cookie;
    const jwtToken = cookies.split("=")[1].split(";")[0];
    //console.log(jwtToken);
    if (!jwtToken) {
        console.log('app crashed at line 28 PersonalInfo');
        //return res.sendStatus(401);
        return res.redirect('/');
    }
    const refreshToken = jwtToken;
    const filter = req.params.filter;

    const user = await UserModel.findOne({RefreshToken: refreshToken}).exec()
    if(!user) return  res.redirect('/userProfile') //res.sendStatus(409);

    switch (filter) {
        case "oU":
            console.log(req.body)
            try {  
                req.body  && req.body.orderUpdateClick == true ? 
                user.Settings.Notification.EmailNotifications.Order_updates = true :
                user.Settings.Notification.EmailNotifications.Order_updates = false;

                await user.save()
                return res.json(user);
                //console.log(result)
        
            } catch (error) {
                console.error('Failed to update user:', error);
            } 
        break;

        case "mP":
            console.log(req.body)
            try {  
                req.body && req.body.marketingPro == true ? 
                user.Settings.Notification.EmailNotifications.Marketing_Promotions = true :
                user.Settings.Notification.EmailNotifications.Marketing_Promotions = false;

                await user.save()
                return res.json(user);
                //console.log(result)
        
            } catch (error) {
                console.error('Failed to update user:', error);
            } 
        break;

        case "aC":
            console.log(req.body)
            try {  
                req.body && req.body.accountAct == true ? 
                user.Settings.Notification.EmailNotifications.Account_activity = true :
                user.Settings.Notification.EmailNotifications.Account_activity = false;

                await user.save()
                return res.json(user);
                //console.log(result)
        
            } catch (error) {
                console.error('Failed to update user:', error);
            } 
        break;

        case "sI":
            console.log(req.body)
            try {  
                req.body && req.body.socialInt == true ? 
                user.Settings.Notification.EmailNotifications.Social_Interactions = true :
                user.Settings.Notification.EmailNotifications.Social_Interactions = false;

                await user.save()
                return res.json(user);
                //console.log(result)
        
            } catch (error) {
                console.error('Failed to update user:', error);
            } 
        break;

        case "oU1":
            console.log(req.body)
            try {  
                req.body  && req.body.orderUpdateClick == true ? 
                user.Settings.Notification.PushNotifications.Order_updates = true :
                user.Settings.Notification.PushNotifications.Order_updates = false;

                await user.save()
                return res.json(user);
                //console.log(result)
        
            } catch (error) {
                console.error('Failed to update user:', error);
            } 
        break;

        case "mP1":
            console.log(req.body)
            try {  
                req.body && req.body.marketingPro == true ? 
                user.Settings.Notification.PushNotifications.Marketing_Promotions = true :
                user.Settings.Notification.PushNotifications.Marketing_Promotions = false;

                await user.save()
                return res.json(user);
                //console.log(result)
        
            } catch (error) {
                console.error('Failed to update user:', error);
            } 
        break;

        case "aC1":
            console.log(req.body)
            try {  
                req.body && req.body.accountAct == true ? 
                user.Settings.Notification.PushNotifications.Account_activity = true :
                user.Settings.Notification.PushNotifications.Account_activity = false;

                await user.save()
                return res.json(user);
                //console.log(result)
        
            } catch (error) {
                console.error('Failed to update user:', error);
            } 
        break;

        case "sI1":
            console.log(req.body)
            try {  
                req.body && req.body.socialInt == true ? 
                user.Settings.Notification.PushNotifications.Social_Interactions = true :
                user.Settings.Notification.PushNotifications.Social_Interactions = false;

                await user.save()
                return res.json(user);
                //console.log(result)
        
            } catch (error) {
                console.error('Failed to update user:', error);
            } 
        break;

        case "oU2":
            console.log(req.body)
            try {  
                req.body  && req.body.orderUpdateClick == true ? 
                user.Settings.Notification.SMSNotifications.Order_updates = true :
                user.Settings.Notification.SMSNotifications.Order_updates = false;

                await user.save()
                return res.json(user);
                //console.log(result)
        
            } catch (error) {
                console.error('Failed to update user:', error);
            } 
        break;

        case "aC2":
            console.log(req.body)
            try {  
                req.body && req.body.accountAct == true ? 
                user.Settings.Notification.SMSNotifications.Account_activity = true :
                user.Settings.Notification.SMSNotifications.Account_activity = false;

                await user.save()
                return res.json(user);
                //console.log(result)
        
            } catch (error) {
                console.error('Failed to update user:', error);
            } 
        break;

        case "sA":
            console.log(req.body)
            try {  
                req.body && req.body.socialAlt == true ? 
                user.Settings.Notification.SMSNotifications.Security_alerts = true :
                user.Settings.Notification.SMSNotifications.Security_alerts = false;

                await user.save()
                return res.json(user);
                //console.log(result)
        
            } catch (error) {
                console.error('Failed to update user:', error);
            } 
        break;

        case "pA":
            console.log(req.body)
            try {  
                req.body && req.body.personalAds == true ? 
                user.Settings.AdsSettings = true :
                user.Settings.AdsSettings = false;

                await user.save()
                return res.json(user);
                //console.log(result)
        
            } catch (error) {
                console.error('Failed to update user:', error);
            } 
        break;

        case "getEmailNot":
            try {  
                const result = user.Settings;
                return res.json(result);
                //console.log(result)
        
            } catch (error) {
                console.error('Failed to update user:', error);
            } 
        break;
    }
     
};

const DelAccount = async (req, res) => {
    const cookies = req.headers.cookie;
    const jwtToken = cookies.split("=")[1].split(";")[0];
    //console.log(jwtToken);
    if (!jwtToken) {
        console.log('app crashed at line 119: PersonalInfo');
        //return res.sendStatus(401);
        return res.redirect('/');
    }

    const user = await UserModel.findOne({RefreshToken: jwtToken}).exec();
};

module.exports = {
    GetPersonalInfo,
    UpdatePersonalInfo,
    DelAccount,
    getActVisibility,
    Settings
};