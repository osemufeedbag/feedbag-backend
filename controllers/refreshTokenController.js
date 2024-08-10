require('dotenv').config();
const jwt = require('jsonwebtoken');
const UserModel = require('../database/dbModel/userModel');

const handleRefreshToken = async (req, res, next) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) {
        return res.redirect('/phoneLogin.html');
    }
    const refreshToken = cookies.jwt;
    
    const userDetails = await UserModel.findOne({RefreshToken: refreshToken}).exec();
    if(!userDetails) {
        console.log('app terminated at line 14: refreshTokenController');
        return res.sendStatus(403);
    }
    
        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            (err, decoded) => {
                const filter = userDetails.PersonalInfo.User == "Farmer" || userDetails.PersonalInfo.User == "Aggregator" ? userDetails.BusinessInfo.BusinessName : userDetails.PersonalInfo.UserName; 
                //if(err || userDetails.PersonalInfo.UserName !== decoded.userName) return res.sendStatus(403);
                if(err || filter !== decoded.Name) {
                    console.log('app terminated at line 25: refreshTokenController');
                    console.log(err);
                    return res.sendStatus(403);
                }
                const accessToken = jwt.sign(
                    {Name: decoded.Name},
                    process.env.ACCESS_TOKEN_SECRET,
                    {expiresIn: 60000 } //set long in production
                );
                res.cookie("accjwt", accessToken, { 
                    httpOnly: true, 
                    //sameSite: "None", 
                    origin: 'http://localhost:4000',
                    maxAge: 60000, 
                    //secure: true
                  });
                  return next();
            }
        );  
    };

    module.exports = handleRefreshToken