const express = require('express');
const router = express.Router();
const activityLogsMyInventoryController = require('../../../controllers/profilePage/Notification/activityLogs');

router.route('/activityLogs')
    .get(activityLogsMyInventoryController.activity);

module.exports = router;