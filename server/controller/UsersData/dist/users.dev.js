"use strict";

// controller
var User = require('../../model/user');

var bcrypt = require('bcrypt');

var passport = require('passport');

var UserRegis = function UserRegis(req, res) {
  var _req$body, email, password, Cpassword, name, phone, address, hashedPassword, user;

  return regeneratorRuntime.async(function UserRegis$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, email = _req$body.email, password = _req$body.password, Cpassword = _req$body.Cpassword, name = _req$body.name, phone = _req$body.phone, address = _req$body.address;

          if (!(!email || !password || !Cpassword || !name || !phone || !address)) {
            _context.next = 10;
            break;
          }

          req.flash('error', 'All fields are required');
          req.flash('email', email);
          req.flash('password', password);
          req.flash('Cpassword', Cpassword);
          req.flash('name', name);
          req.flash('phone', phone);
          req.flash('address', address);
          return _context.abrupt("return", res.render('RegisterPage'));

        case 10:
          // check email is exists in our DB
          User.exists({
            email: email
          }, function (err, result) {
            if (result) {
              req.flash('error', 'Email is already exists');
              req.flash('email', email);
              req.flash('password', password);
              req.flash('Cpassword', Cpassword);
              req.flash('name', name);
              req.flash('phone', phone);
              req.flash('address', address);
              return res.render('RegisterPage');
            }
          }); // Hashing Password

          _context.next = 13;
          return regeneratorRuntime.awrap(bcrypt.hash(password, 10));

        case 13:
          hashedPassword = _context.sent;
          //  Create A user Data Details
          user = new User({
            name: name,
            email: email,
            password: hashedPassword,
            Cpassword: hashedPassword,
            phone: phone,
            address: address
          }); // when registers successfull...

          user.save().then(function (user) {
            return res.redirect('/login');
          })["catch"](function (err) {
            req.flash('error', 'Something went wrong!');
            return res.render('RegisterPage');
          }); // res.render('RegisterPage');

        case 16:
        case "end":
          return _context.stop();
      }
    }
  });
};

var UserLogin = function UserLogin(req, res, next) {
  var _req$body2, email, password;

  return regeneratorRuntime.async(function UserLogin$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          // res.render('LoginPage');
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;

          if (!(!email || !password)) {
            _context2.next = 4;
            break;
          }

          req.flash('error', 'All fields are required');
          return _context2.abrupt("return", res.redirect('/login'));

        case 4:
          // passport.authenticate methods
          // for info parameter get the error messages
          passport.authenticate('local', function (err, user, info) {
            if (err) {
              req.flash('error', info.message);
              return next(err);
            }

            if (!user) {
              req.flash('error', info.message);
              return res.redirect('/login');
            }

            req.logIn(user, function (err) {
              if (err) {
                req.flash('error', info.message);
                return next(err);
              }

              return res.redirect('/userprofile');
            });
          })(req, res, next);

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var UserLogout = function UserLogout(req, res, next) {
  return regeneratorRuntime.async(function UserLogout$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          req.logout(); // passport logout function

          return _context3.abrupt("return", res.redirect('/'));

        case 2:
        case "end":
          return _context3.stop();
      }
    }
  });
};

module.exports = {
  UserRegis: UserRegis,
  UserLogin: UserLogin,
  UserLogout: UserLogout
};