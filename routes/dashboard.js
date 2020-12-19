var express = require('express');
var router = express.Router();
var dashboardController = require('../controllers/dashboard/dashboard.controller');

router.get('/', dashboardController.recoverUserData);

module.exports = router;
