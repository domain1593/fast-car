const express = require('express');
const router = express.Router();
var registerController = require('../controllers/users/register.controller');
const passport = require('passport');

router.get('/login', (req, res) => {
  res.render('login');
})

router.get('/register', (req, res) => {
  res.render('register')
})

router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/dashboard',
    failureRedirect: '/users/login',
    failureFlash: true,
  })(req, res, next);
})

router.post('/register', registerController.registerUser);

router.post('/login', (req, res, next) => {
})

router.get('/logout', (req, res) => {
})

module.exports = router;
