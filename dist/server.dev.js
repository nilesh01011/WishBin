"use strict";

require('dotenv').config(); // ===================Variables Declarations===================


var express = require('express');

var expressLayouts = require('express-ejs-layouts');

var path = require('path');

var PORT = process.env.PORT || 8080;

var connectDB = require('./server/database/connection');

var session = require('express-session'); // sessions storages


var flash = require('express-flash'); // for single time error messages


var MongoDBStore = require('connect-mongo'); // for sessions storages


var passport = require('passport');

var app = express();

var _require = require('socket.io'),
    Server = _require.Server;

var Emitter = require('events'); // Event emitter


var eventEmitter = new Emitter();
app.set('eventEmitter', eventEmitter); // ============================ Session Store ===========================

app.use(session({
  secret: process.env.SECRET_KEY,
  // Its For Cookies
  resave: false,
  saveUninitialized: false,
  store: MongoDBStore.create({
    mongoUrl: 'mongodb://localhost:27017/ECommerce'
  }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24
  } // cookies store for 24 hours only

})); // =================================passport config======================
// Passport configuration after session call

var passportInit = require('./server/config/passport');

passportInit(passport); // passed the passport variable we created before

app.use(passport.initialize()); // initialize first

app.use(passport.session()); // it's used with session

app.use(flash()); // express-flash for the Success and Error Messages send to the displays
// =====================Views Engines Sets======================
// Path Declare

app.use(expressLayouts);
app.use(express["static"]('public'));
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json()); // we use Globally Middleware

app.use(function (req, res, next) {
  res.locals.session = req.session;
  res.locals.user = req.user;
  next();
}); // Views Path

var views_path = path.join(__dirname, './resources/views');
app.set('view engine', 'ejs');
app.set('views', views_path);

require('./server/routes/router')(app); // =============================================================


var server = app.listen(PORT, function () {
  console.log("Server Listening to port on http://localhost:".concat(PORT));
});
connectDB();
var io = new Server(server);
io.on('connection', function (socket) {
  socket.on('join', function (orderId) {
    socket.join(orderId);
  });
});
eventEmitter.on('orderUpdated', function (data) {
  io.to("order_".concat(data.id)).emit('orderUpdated', data);
});
eventEmitter.on('orderPlaced', function (data) {
  io.to('adminRoom').emit('orderPlaced', data);
});