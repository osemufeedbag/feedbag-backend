
const allCompanyNamesModel = require('../../../database/dbModel/allCompanyNamesModel');
const userModel = require('../../../database/dbModel/userModel');

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const displayFramers = async (req, res) => { 
    const displayFarmer= await allCompanyNamesModel.find({});
    if(!displayFarmer) return res.sendStatus(401);

    let result = [];
    
    while (result.length <= 6 || result.length == 0) {
        let int = getRandomInteger(displayFarmer.length - 1, 0);
        result.push(displayFarmer[int]);
    }

    let container = [];
    result.forEach(async (rl) => {
        let dFarmer = await userModel.findOne({'BusinessInfo.BusinessName': rl.BusinessName}).exec();
        container.push(dFarmer);
    })

    res.json(container);
};

module.exports = {
    displayFramers
};