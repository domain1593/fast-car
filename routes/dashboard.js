var express = require('express');
var router = express.Router();
var dashboardController = require('../controllers/dashboard/dashboard.controller');
const { ensureAuthenticated } = require('../providers/auth.provider');

router.get('/', ensureAuthenticated, dashboardController.goToDashboard);

router.post('/confirm', ensureAuthenticated, dashboardController.confirmPage);

router.post('/confirm/request_car', ensureAuthenticated, dashboardController.requestCar);

module.exports = router;
