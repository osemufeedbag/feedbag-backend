const inventoryModel = require('../../../database/dbModel/inventoryModel');

const search = async (req, res) => {
    const serachFilter = req.body.filter; 
    const searchInventory = await inventoryModel.find({'AllItem.ItemName': serachFilter}).exec()
    if(!searchInventory) return res.sendStatus(401);

    res.json(searchInventory);
}

module.exports = {
    search
}