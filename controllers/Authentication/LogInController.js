require('dotenv').config();
const bcrypt = require('bcrypt');
const UserModel = require('../../database/dbModel/UserModel');
const jwt = require('jsonwebtoken');


const logIn = async (req, res) => {
    const { cont, logInPwd } = req.body;
    if (!cont || !logInPwd) return res.status(400).json({
        'message': 'Username and password required'
    })

    const userDetails = await UserModel.findOne({Email: cont}).exec();
    if (!userDetails) return res.status(400).json({
        'message': 'No known user with is email, try again'
    });

    const match = bcrypt.compare(logInPwd, userDetails["Password"]);
        if (match) {
            const accessToken = jwt.sign(
                {"userEmail": userDetails["email"]},
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn: "30s"}//Increase the time to a longer period.
            );
            const refreshToken = jwt.sign(
                {"userEmail": userDetails["email"]},
                process.env.REFRESH_TOKEN_SECRET,
                {expiresIn: "1d"}//Increase the time to a longer period.
            );
            // Get otherUsers and update frefreshToken;
            
            res.cookie('jwt', refreshToken, {httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
            res.json({accessToken});
    } else {
        res.sendStatus(401);
    }
};

module.exports = {
    logIn
};
