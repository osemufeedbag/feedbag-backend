
const allCompanyNamesModel = require('../../../database/dbModel/allCompanyNamesModel');
const userModel = require('../../../database/dbModel/userModel');

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const displayFramers = async (req, res) => { 
    const displayFarmer= await allCompanyNamesModel.find({});
    if(!displayFarmer) return res.sendStatus(401);

    let result = [];
    let int = 0;
    
    //let int = getRandomInteger(displayFarmer.length - 1, 0);
    while(int <= 6) {
        result.push(displayFarmer[getRandomInteger(displayFarmer.length - 1, 0)]);
        int ++;
    }

    res.json(result);
};

module.exports = {
    displayFramers
};