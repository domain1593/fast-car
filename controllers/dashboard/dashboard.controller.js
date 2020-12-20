
const Product = require('../../models/product.model');

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
