var createError = require('http-errors');
var express = require('express');
var expressEjsLayout = require('express-ejs-layouts');
const session = require('express-session');
const flash = require('connect-flash');

var mongoConnect = require('./providers/mongo.provider');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var dashboardRouter = require('./routes/dashboard');

var app = express();

const passport = require('passport');
require("./providers/passport.provider")(passport)

function generalSetup() {

  app.set('view engine', 'ejs');
  app.use(expressEjsLayout);

  app.use(function (req, res, next) {
    console.log('error');
    next(createError(404));
  });

  app.use(function (err, req, res, next) {

    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.json('error');
  });
}

function stablishRouting() {

  app.use('/', indexRouter);
  app.use('/users', usersRouter);
  app.use('/dashboard', dashboardRouter);
}

mongoConnect.fastCar_db_connect;
app.use(express.urlencoded({ extended: false }));

app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  next();
})
stablishRouting();
generalSetup();

module.exports = app;
