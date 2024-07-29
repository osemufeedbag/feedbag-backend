
const allCompanyNamesModel = require('../../../database/dbModel/allCompanyNamesModel');
const userModel = require('../../../database/dbModel/userModel');

const displayFramers = async (req, res) => { 
    const displayFilter = req.params.displayFilter;

    switch(displayFilter) {
        case "Farmer+":
            const displayFarmerX = await allCompanyNamesModel.find({});
            if(!displayFarmerX) return res.sendStatus(401);

            res.json(displayFarmerX.sort().slice(0,7));
        break;

        case "Farmer++":
            const displayFarmerX2 = await allCompanyNamesModel.find({});
            if(!displayFarmerX2) return res.sendStatus(401);
            
            res.json(displayFarmerX2.sort());
        break;
    }  
};

module.exports = {
    displayFramers
};