const express = require('express');
const router = express.Router();
var indexController = require('../controllers/index/index.controller');

router.get('/', indexController.renderHomePage);

router.get('/register', indexController.renderRegisterPage);

module.exports = router;
