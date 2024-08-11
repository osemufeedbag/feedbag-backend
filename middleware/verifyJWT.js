require('dotenv').config();
const jwt = require('jsonwebtoken');
const handleRefreshToken = require('../controllers/refreshTokenController');

    const verifyJWT = async (req, res, next) => {
    const accessToken = req.cookies.accjwt;
    const refreshToken = req.cookies.jwt;
    //console.log("access token from verify " + accessToken);
    if(accessToken == undefined || refreshToken == undefined) {
        return await handleRefreshToken(req, res, next);
    } else {
        jwt.verify(
            accessToken, 
            process.env.ACCESS_TOKEN_SECRET,
            (err, decoded) => {
                if(err) {
                    console.log(err);
                    console.log('app terminated at line 17: verifyJWT');
                    return res.sendStatus(403);
                } //invalid token
                req.Name = decoded.Name;
                next();
            });
        }
    };

module.exports = verifyJWT

