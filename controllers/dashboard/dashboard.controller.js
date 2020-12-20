
const Product = require('../../models/product.model');
const User = require("../../models/user.model");

var user = {};
var product = [];

exports.goToDashboard = (req, res) => {

    Product.find()
        .then((products) => {

            user = req.user;
            res.render('dashboard', {
                user: req.user,
                product: products[0].category
            });
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Error Occured",
            });
        });
};

exports.confirmPage = (req, res) => {

    product = JSON.parse(req.body.car),
        res.render('confirm', {

            product: product
        });
};

exports.requestCar = (req, res) => {

    var email = req.user.email;
    req.user.product.push(product);

    User.findOneAndUpdate({ email: email }, req.user, { upsert: true })
        .then((user) => {

            res.render('succesful_request', {
            });
        })
        .catch((error) => {

            res.send(500, { error: error });
        })
}

exports.seeUserDataPage = (req, res) => {

    res.render('user_panel', {
        user: user
    })
}
