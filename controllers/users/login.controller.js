const passport = require('passport');

exports.renderLoginPage = (req, res) => {
    res.render('login');
};

exports.loginUser = (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true,
    })(req, res, next);
};

exports.logoutUser = (req, res) => {
    req.logout();
    req.flash('success_msg', 'Ha cerrado sesión');
    res.redirect('/users/login');
};
