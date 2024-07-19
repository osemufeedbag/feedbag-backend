const inventoryModel = require('../../database/dbModel/inventoryModel');
const UserModel = require('../../database/dbModel/userModel');

const AddInventoryItem =  async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    console.log(cookies.jwt);
    const refreshToken = cookies.jwt;

    const user = await UserModel.findOne({RefreshToken: refreshToken}).exec()
    if(!user) return res.sendStatus(401);


    try {
        const inventory = await inventoryModel.create({
            'UserId': user._id,
            'AllItem.ItemName': req.body.ItemName,
            'AllItem.DateAdded': req.body.DateAdded,
            'AllItem.Price': req.body.Price,
            'AllItem.Quantity': req.body.Quantity
        });
        inventory.save();
        res.json(inventory);

    } catch (error) {
        console.log(error);
    }
};

const GetUserAllItems =  async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    console.log(cookies.jwt);
    const refreshToken = cookies.jwt;

    const user = await UserModel.findOne({RefreshToken: refreshToken}).exec()
    const userInventory = await inventoryModel.find({'UserId': user._id}).exec()

    res.json(userInventory);
};

const OutOfStock =  async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    console.log(cookies.jwt);
    const refreshToken = cookies.jwt;

    const user = await UserModel.findOne({RefreshToken: refreshToken}).exec()
    const userInventory = await inventoryModel.find({'UserId': user._id, 'AllItem.Quantity': {$lt: 1}}).exec()
    res.json(userInventory);
};

const LowStock =  async (req, res) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401);
    console.log(cookies.jwt);
    const refreshToken = cookies.jwt;

    const user = await UserModel.findOne({RefreshToken: refreshToken}).exec()
    const userInventory = await inventoryModel.find({'UserId': user._id, 'AllItem.Quantity': {$lt: 3}}).exec()
    res.json(userInventory);
};

module.exports = {
    GetUserAllItems,
    AddInventoryItem,
    OutOfStock,
    LowStock
}