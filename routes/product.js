var express = require('express');
var router = express.Router();
var productController = require('../controllers/products/product.controller');

router.get('/', productController.findAll);

module.exports = router;
