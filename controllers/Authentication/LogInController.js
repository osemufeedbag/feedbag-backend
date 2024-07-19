require('dotenv').config();
const bcrypt = require('bcrypt');
const UserModel = require('../../database/dbModel/userModel');
const jwt = require('jsonwebtoken');


const logIn = async (req, res) => {
    const { Email, Password } = req.body;
    if (!Email || !Password) return res.status(400).json({
        'message': 'Username and password required'
    })

    const userDetails = await UserModel.findOne({'PersonalInfo.Email': Email}).exec();
    if (!userDetails) return res.status(400).json({
        'message': 'No known user with is email, try again'
    });

    const match = bcrypt.compare(Password, userDetails.PersonalInfo.Password);
        if (match) {
            const accessToken = jwt.sign(
                {"userEmail": userDetails.PersonalInfo.Email},
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn: "60s"} //Increase the time to a longer period.
            );
            const refreshToken = jwt.sign(
                {"userEmail": userDetails.PersonalInfo.Email},
                process.env.REFRESH_TOKEN_SECRET,
                {expiresIn: "1d"} //Increase the time to a longer period.
            );
            // Get otherUsers and update frefreshToken;
            userDetails.RefreshToken = refreshToken;
            const result = await userDetails.save();
            console.log(result);
            
            res.cookie('jwt', refreshToken, {httpOnly: true, sameSite: 'None', maxAge: 24 * 60 * 60 * 1000 }) //Add in production environment = secure: true;
            res.json({accessToken});
    } else {
        res.sendStatus(401);
    }
};

module.exports = {
    logIn
};
