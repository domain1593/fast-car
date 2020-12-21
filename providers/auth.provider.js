module.exports = {
    ensureAuthenticated: function (req, res, next) {
        if (req.isAuthenticated()) {
            return next();
        }
        req.flash('error_msg', 'Por favor inicie sesión para ver esta pantalla');
        res.redirect('/users/login');
    }
}
