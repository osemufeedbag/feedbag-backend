const inventoryModel = require('../../../database/dbModel/inventoryModel');
const UserModel = require('../../../database/dbModel/userModel');
const date = require('date-and-time');
const now = new Date();


//date.format(new Date(), 'DD-[MM]-YYYY');

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
            'AllItem.DateAdded': date.format(now, 'YYYY/MM/DD HH:mm:ss').split(" ")[0],
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

    const totalCount = req.params.filter
    switch (totalCount) {
        case "Count":
            const user = await UserModel.findOne({RefreshToken: refreshToken}).exec()
            const userInventory = await inventoryModel.find({'UserId': user._id}).exec()

            res.json(JSON.parse(JSON.stringify(userInventory)).length);
        break;

        case "List":
            const Listuser = await UserModel.findOne({RefreshToken: refreshToken}).exec()
            const ListuserInventory = await inventoryModel.find({'UserId': Listuser._id}).exec()
            res.json(ListuserInventory);
        break;

        case "L24hr": //Last 24 hours total product count
            const L24hrUser = await UserModel.findOne({RefreshToken: refreshToken}).exec()
            const L24hrUserInventory = await inventoryModel.find({
                'UserId': L24hrUser._id, 
                'AllItem.DateAdded': date.format(now, 'YYYY/MM/DD HH:mm:ss').split(" ")[0]
            }).exec()
            res.json(JSON.parse(JSON.stringify(L24hrUserInventory)).length);
        break;
    }
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