const express = require('express');
const router = express.Router();
var registerController = require('../controllers/users/register.controller');
var loginController = require('../controllers/users/login.controller');

router.get('/login', loginController.renderLoginPage);

router.post('/login', loginController.loginUser);

router.get('/logout', loginController.logoutUser);

router.get('/register', registerController.renderRegisterPage)

router.post('/register', registerController.registerUser);

module.exports = router;
