const UserModel = require('../../database/dbModel/userModel');

const LogOut = async (req, res) => {
    const cookies = req.headers.cookie;
    const jwtToken = cookies.split("=")[1].split(";")[0];
    if (!jwtToken) {
        console.log('app crashed at line 12: logout');
        return res.sendStatus(401);
    }
    const refreshToken = jwtToken;

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