
const Product = require('../../models/product.model');

exports.findAll = (req, res) => {
  Product.find()
    .then((products) => {

      setTimeout(() => {
        res.status(200).send(products[0].category);
      }, 2000);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error Occured",
      });
    });
};
