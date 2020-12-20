
const Product = require('../../models/product.model');
const User = require("../../models/user.model");

var product = {};

exports.goToDashboard = (req, res) => {

    Product.find()
        .then((products) => {

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
    req.user.product = product;

    User.findOneAndUpdate({ email: email }, req.user, { upsert: true })
        .then((user) => {

            res.send('Succesfully saved.');
        })
        .catch((error) => {

            res.send(500, { error: error });
        })
}
