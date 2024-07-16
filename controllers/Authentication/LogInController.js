require('dotenv').config();
const bcrypt = require('bcrypt');
const signupModel = require('../../database/dbModel/signUpEmailModel');
const signupModelPhone = require('../../database/dbModel/signUpPhoneModel');
const jwt = require('jsonwebtoken');

//Farmer sign up logic start-->
const logIn = async (req, res) => {
    const { cont, logInPwd } = req.body;
    if (!cont || !logInPwd) return res.status(400).json({
        'message': 'Username and password required'
    })

    const userDetails = await signupModel.findOne({contact: cont}).exec();
        const match = bcrypt.compare(logInPwd, userDetails["password"]);
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
//Login Email logic ends-->