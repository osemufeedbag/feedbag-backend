const jwt = require('jsonwebtoken');
require('dotenv').config();
const UserModel = require('../database/dbModel/userModel');

const handleRefreshToken = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    console.log(cookies.jwt);
    const refreshToken = cookies.jwt;
    
    const userDetails = await UserModel.findOne({RefreshToken: refreshToken}).exec();
    if(!userDetails) return res.sendStatus(403);
    
        jwt.verify(
            refreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            (err, decoded) => {
                const filter = userDetails.PersonalInfo.User == "Farmer" || "Aggregator" ? userDetails.BusinessInfo.BusinessName : userDetails.PersonalInfo.UserName 
                //if(err || userDetails.PersonalInfo.UserName !== decoded.userName) return res.sendStatus(403);
                if(err || filter !== decoded.Name) return res.sendStatus(403);
                const accessToken = jwt.sign(
                    {"Name": decoded.Name},
                    process.env.ACCESS_TOKEN_SECRET,
                    {expiresIn: "1h"} //set long in production
                );
                res.json({accessToken})
            }
        )  
    };

    module.exports = {
        handleRefreshToken
    }