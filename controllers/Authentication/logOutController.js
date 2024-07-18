const UserModel = require('../../database/dbModel/userModel');;

const LogOut = async (req, res) => {
    //On the client side, also delete the accessToken when the logout button is clicked

    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(204);
    const refreshToken = cookies.jwt;

    const userDetails = await UserModel.findOne({RefreshToken: refreshToken}).exec();
    if(!userDetails) {
        res.clearCookie('jwt', {httpOnly: true, sameSite: 'None'}); //Add in production environment = secure: true;
        return res.sendStatus(204);
    }

     userDetails.RefreshToken = ' ';
     const result = await userDetails.save();
     console.log(result);
     
     res.clearCookie('jwt', {httpOnly: true, sameSite: 'None'}); //Add in production environment = secure: true;
     res.sendStatus(204);
};

    module.exports = {
        LogOut
    }