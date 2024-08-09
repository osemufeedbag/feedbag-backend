require("dotenv").config();
const bcrypt = require("bcryptjs");
const UserModel = require("../../database/dbModel/userModel");
const jwt = require("jsonwebtoken");

const eLogin = async (req, res) => {
        const { Email, Password } = req.body;
        if (!Email || !Password) return res.status(400).json({
            message: "Username and password required",
          });

        const userDetails = await UserModel.findOne({ "PersonalInfo.Email": Email }).exec();
        if (!userDetails) return res.status(400).json({
            message: "No known user with email, try again",
          });

        const match = await bcrypt.compare(Password, userDetails.PersonalInfo.Password);
        if (match) { 
          const accessToken = jwt.sign( 
            { Name: userDetails.PersonalInfo.User == "Farmer" || userDetails.PersonalInfo.User == "Aggregator" ? userDetails.BusinessInfo.BusinessName : userDetails.PersonalInfo.UserName}, 
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "30s" } //Increase the time to a longer period.
        );

          const refreshToken = jwt.sign(
            { Name: userDetails.PersonalInfo.User == "Farmer" || userDetails.PersonalInfo.User == "Aggregator" ? userDetails.BusinessInfo.BusinessName : userDetails.PersonalInfo.UserName },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: "60s" } //Increase the time to a longer period.
        );
      
          userDetails.RefreshToken = refreshToken;
          const result = await userDetails.save();
          console.log(result);
      
          res.cookie("jwt", refreshToken, { 
            httpOnly: true, 
            sameSite: "None", 
            maxAge: 24 * 60 * 60 * 1000, 
            secure: true
          }); //Add in production environment = secure: true;

          res.cookie("accjwt", accessToken, { 
            httpOnly: true, 
            sameSite: "None", 
            maxAge: 60000, 
            secure: true
          }); 
          //res.json({ accessToken });
          console.log(accessToken);
          res.redirect('/userProfile');
      } else {
          res.sendStatus(401);
        }
};

const pLogin = async (req, res) => {
  const { Phone, Password } = req.body;
        if (!Phone || !Password) return res.status(400).json({
            message: "Phone number and password required",
          });

        const userDetails = await UserModel.findOne({ "PersonalInfo.Phone": Phone }).exec();
        if (!userDetails) return res.status(400).json({
            message: "No known user with Phone number, try again",
          });

        const match = await bcrypt.compare(Password, userDetails.PersonalInfo.Password);
        if (match) { 
            const accessToken = jwt.sign( 
              { Name: userDetails.PersonalInfo.User == "Farmer" || userDetails.PersonalInfo.User == "Aggregator" ? userDetails.BusinessInfo.BusinessName : userDetails.PersonalInfo.UserName}, 
              process.env.ACCESS_TOKEN_SECRET,
              { expiresIn: "30s" } //Increase the time to a longer period.
          );

            const refreshToken = jwt.sign(
              { Name: userDetails.PersonalInfo.User == "Farmer" || userDetails.PersonalInfo.User == "Aggregator" ? userDetails.BusinessInfo.BusinessName : userDetails.PersonalInfo.UserName },
              process.env.REFRESH_TOKEN_SECRET,
              { expiresIn: "60s" } //Increase the time to a longer period.
          );
        
            userDetails.RefreshToken = refreshToken;
            const result = await userDetails.save();
            console.log(result);
        
            res.cookie("jwt", refreshToken, { 
              httpOnly: true, 
              sameSite: "None", 
              //maxAge: 24 * 60 * 60 * 1000,
              maxAge: 100000,
              secure: true
            }); //Add in production environment = secure: true;

            res.cookie("accjwt", accessToken, { 
              httpOnly: true, 
              sameSite: "None", 
              maxAge: 60000, 
              secure: true
            }); 
            //res.json({ accessToken });
            //console.log(accessToken);
            res.redirect('/userProfile');
        } else {
            res.sendStatus(401);
          }
};

module.exports = {
  eLogin,
  pLogin
};
