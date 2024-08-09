require('dotenv').config();
const jwt = require('jsonwebtoken');
const refreshTokenController = require('../controllers/refreshTokenController')

const verifyJWT = (req, res, next) => {
    const accessToken = req.cookies.accjwt;
    if(!accessToken) {
        return res.sendStatus(403);
    } else {
        jwt.verify(
            accessToken, 
            process.env.ACCESS_TOKEN_SECRET,
            (err, decoded) => {
                if(err) return res.sendStatus(403); //invalid token
                req.Name = decoded.Name;
                next();
            }
        );
    }
        
    };

module.exports = verifyJWT

