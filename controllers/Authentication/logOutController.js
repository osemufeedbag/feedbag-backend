const UserModel = require('../../database/dbModel/userModel');;

const LogOut = async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    console.log(cookies.jwt);
    const refreshToken = cookies.jwt;

    const userDetails = await UserModel.findOne({RefreshToken: refreshToken}).exec();
    if(!userDetails) {
        res.clearCookie('jwt', {httpOnly: true, origin: 'http://localhost:4000'}); //Add in production environment = secure: true;
        //return res.sendStatus(204);
        return res.redirect('/phoneLogin.html');
    }

     userDetails.RefreshToken = ' ';
     const result = await userDetails.save();
     console.log(result);
     
     res.clearCookie('jwt', {httpOnly: true, origin: 'http://localhost:4000'}); //Add in production environment = secure: true;
     //res.sendStatus(204);
     return res.redirect('/phoneLogin.html');
};

    module.exports = {
        LogOut
    }