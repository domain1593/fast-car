const express = require('express');
const router = express.Router();
var rootController = require('../controllers/root/root.controller');

router.get('/', rootController.renderHomePage);

router.get('/register', rootController.renderRegisterPage);

module.exports = router;
