const jwt = require('jsonwebtoken');
require('dotenv').config();
const UserModel = require('../database/dbModel/UserModel');;

const handleRefreshToken = async (req, res) => {
    const cookies = req.cookie;
    if (!cookies?.jwt) return res.sendStatus(401);
    const RefreshToken = cookies.jwt;

    const userDetails = await UserModel.findOne({refreshToken: RefreshToken}).exec();
    if(!userDetails) return res.sendStatus(403);
        jwt.verify(
            RefreshToken,
            process.env.REFRESH_TOKEN_SECRET,
            (err, decoded) => {
                if(err || userDetails['email'] !== decoded.userEmail) return res.sendStatus(403);
                const accessToken = jwt.sign(
                    {"userEmail": decoded.userEmail},
                    process.env.ACCESS_TOKEN_SECRET,
                    {expiresIn: "30s"} //set long in production
                );
                res.json({accessToken})
            }

        )
        
    };

    module.exports = {handleRefreshToken}