exports.recoverUserData = (req, res) => {
    res.render('dashboard', {
        user: req.user
    });
};
