require('dotenv').config();

// ===================Variables Declarations===================
const express = require('express');

const expressLayouts = require('express-ejs-layouts');

const path = require('path');

const PORT = process.env.PORT || 8080;

const connectDB = require('./server/dataBase/connection');

const session = require('express-session'); // sessions storages

const flash = require('express-flash'); // for single time error messages

const MongoDBStore = require('connect-mongo'); // for sessions storages

const passport = require('passport');

const app = express();

const { Server } = require('socket.io');

const Emitter = require('events');

// Event emitter

const eventEmitter = new Emitter();

app.set('eventEmitter', eventEmitter);

// ============================ Session Store ===========================

app.use(
  session({
    secret: process.env.SECRET_KEY, // Its For Cookies
    resave: false,
    saveUninitialized: false,
    store: MongoDBStore.create({
      mongoUrl: 'mongodb://localhost:27017/ECommerce',
    }),
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, // cookies store for 24 hours only
  })
);

// =================================passport config======================
// Passport configuration after session call

const passportInit = require('./server/config/passport');

passportInit(passport); // passed the passport variable we created before

app.use(passport.initialize()); // initialize first

app.use(passport.session()); // it's used with session

app.use(flash()); // express-flash for the Success and Error Messages send to the displays

// =====================Views Engines Sets======================

// Path Declare

app.use(expressLayouts);

app.use(express.static('public'));

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

// we use Globally Middleware

app.use((req, res, next) => {
  res.locals.session = req.session;
  res.locals.user = req.user;
  next();
});

// Views Path

const views_path = path.join(__dirname, './resources/views');

app.set('view engine', 'ejs');

app.set('views', views_path);

require('./server/routes/router')(app);

// =============================================================

const server = app.listen(PORT, () => {
  console.log(`Server Listening to port on http://localhost:${PORT}`);
});

connectDB();

const io = new Server(server);

io.on('connection', (socket) => {
  socket.on('join', (orderId) => {
    socket.join(orderId);
  });
});

eventEmitter.on('orderUpdated', (data) => {
  io.to(`order_${data.id}`).emit('orderUpdated', data);
});

eventEmitter.on('orderPlaced', (data) => {
  io.to('adminRoom').emit('orderPlaced', data);
});
