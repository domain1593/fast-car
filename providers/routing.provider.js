var express = require('express');

var indexRouter = require('../routes/index');
var usersRouter = require('../routes/users');
var placesRouter = require('../routes/product_category');

var app = express();

function stablishRouting() {

    app.use('/', indexRouter);
    app.use('/users', usersRouter);
    app.use('/places', placesRouter);
}

exports.routes = stablishRouting();
