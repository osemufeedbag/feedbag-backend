const inventoryModel = require('../../../database/dbModel/inventoryModel');
const UserModel = require('../../../database/dbModel/userModel');
const activityLogsModel = require('../../../database/dbModel/activityLogs');
const date = require('date-and-time');
const now = new Date();


//date.format(new Date(), 'DD-[MM]-YYYY');

const AddInventoryItem =  async (req, res) => {
    const cookies = req.headers.cookie;
    const jwtToken = cookies.split("=")[1].split(";")[0];
    console.log(jwtToken);
    if (!jwtToken) {
        console.log('app crashed at line 119: PersonalInfo');
        return res.sendStatus(401);
    }

    const user = await UserModel.findOne({RefreshToken: jwtToken}).exec()
    if(!user) return res.sendStatus(401);
    const count = new Uint32Array(1);

    try {
        const inventory = await inventoryModel.create({
            'UserId': user._id,
            'Name': req.body.ItemName,
            'DateAdded': date.format(now, 'YYYY/MM/DD HH:mm:ss').split(" ")[0],
            'Price': req.body.Price,
            'WeightKG': req.body.WeightKG,
            'Quantity': req.body.Quantity,
            'Description': req.body.Description,
            'Id': Math.trunc((crypto.getRandomValues(count))/1000000)
        });
        await inventory.save();
        const inventoryActivitylog = await activityLogsModel.create({
            'UserId': user._id,
            'Date': date.format(now, 'YYYY/MM/DD HH:mm:ss').split(" ")[0],
            "Time": date.format(now, 'YYYY/MM/DD HH:mm:ss').split(" ")[1],
            'Status':  "Inventory updated."
        });
        await inventoryActivitylog.save();
        return res.redirect('/userProfile');

    } catch (error) {
        console.log(error);
    }
};

const UpdateInventory =  async (req, res) => {
    const cookies = req.headers.cookie;
    const jwtToken = cookies.split("=")[1].split(";")[0];
    console.log(jwtToken);
    if (!jwtToken) {
        console.log('app crashed at line 119: PersonalInfo');
        return res.sendStatus(401);
    }

    const user = await UserModel.findOne({RefreshToken: jwtToken}).exec()
    const userInventory = await inventoryModel.findOne({UserId: user._id}).exec()
    if(!user) return res.sendStatus(401);


    try {
        
        if(req.body?.ItemName) userInventory.ItemName = req.body.ItemName;
        if(req.body?.Price) userInventory.Price = req.body.Price;

        const userInventoryResult = await userInventory.save();

        const inventoryActivitylog = await activityLogsModel.create({
            'UserId': user._id,
            'Date': date.format(now, 'YYYY/MM/DD HH:mm:ss').split(" ")[0],
            'NewInventoryAdded':  "Inventroy updated."
        });
        await inventoryActivitylog.save();
        res.json(userInventoryResult);

    } catch (error) {
        console.log(error);
    }
};

const GetUserAllItems =  async (req, res) => {
    const cookies = req.headers.cookie;
    console.log(cookies);
    const jwtToken = cookies.split("=")[1].split(";")[0];
    console.log(jwtToken);
    if (!jwtToken) {
        console.log('app crashed at line 119: PersonalInfo');
        return res.sendStatus(401);
    }
    const refreshToken = jwtToken;

    const totalCount = req.params.filter
    switch (totalCount) {
        case "Count":
            const user = await UserModel.findOne({RefreshToken: refreshToken}).exec()
            console.log(user);
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
    const cookies = req.headers.cookie;
    const jwtToken = cookies.split("=")[1].split(";")[0];
    console.log(jwtToken);
    if (!jwtToken) {
        console.log('app crashed at line 119: PersonalInfo');
        return res.sendStatus(401);
    }

    const user = await UserModel.findOne({RefreshToken: jwtToken}).exec()
    const userInventory = await inventoryModel.find({'UserId': user._id, 'Quantity': {$lt: 1}}).exec()
    res.json(userInventory);
};

const LowStock =  async (req, res) => {
    const cookies = req.headers.cookie;
    const jwtToken = cookies.split("=")[1].split(";")[0];
    console.log(jwtToken);
    if (!jwtToken) {
        console.log('app crashed at line 119: PersonalInfo');
        return res.sendStatus(401);
    }

    const user = await UserModel.findOne({RefreshToken: jwtToken}).exec()
    const userInventory = await inventoryModel.find({'UserId': user._id, 'Quantity': {$lt: 3}}).exec()
    res.json(userInventory);
};

const SearchInventory =  async (req, res) => {
    const cookies = req.headers.cookie;
    const jwtToken = cookies.split("=")[1].split(";")[0];
    console.log(jwtToken);
    if (!jwtToken) {
        console.log('app crashed at line 119: PersonalInfo');
        return res.sendStatus(401);
    }
    const search = req.body.itemSearch
    const user = await UserModel.findOne({RefreshToken: jwtToken}).exec()
    const searchedInventory = await inventoryModel.find({'UserId': user._id, 'ItemName': search}).exec()
    res.json(searchedInventory);
};

module.exports = {
    GetUserAllItems,
    AddInventoryItem,
    OutOfStock,
    LowStock,
    SearchInventory
}