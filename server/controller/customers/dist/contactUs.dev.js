"use strict";

var Products = require('../../model/productsModel');

var WishlistItems = require('../../model/wishlistModel');

var orders = require('../../model/ordersModel');

var User = require('../../model/user');

var userMessage = require('../../model/userContactUs');

var ContactUsPage = function ContactUsPage(req, res) {
  var userOrders, adminUser, FindAdmin, wishlistItems, cartSession, FireTV, DellLap, AsusLap;
  return regeneratorRuntime.async(function ContactUsPage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!req.user) {
            _context.next = 8;
            break;
          }

          _context.next = 3;
          return regeneratorRuntime.awrap(orders.find({
            customerId: req.user._id
          }, null, {
            sort: {
              createdAt: -1
            }
          }));

        case 3:
          userOrders = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(User.findOne({
            _id: req.user._id
          }));

        case 6:
          FindAdmin = _context.sent;
          adminUser = FindAdmin.role;

        case 8:
          if (!req.user) {
            _context.next = 12;
            break;
          }

          _context.next = 11;
          return regeneratorRuntime.awrap(WishlistItems.find({
            customerId: req.user._id
          }));

        case 11:
          wishlistItems = _context.sent;

        case 12:
          //   Cart session
          cartSession = req.session.addcart; // Fire TV ID

          _context.next = 15;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Sony Bravia 4K 49Inch'
          }));

        case 15:
          FireTV = _context.sent;
          _context.next = 18;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Dell Alienware'
          }));

        case 18:
          DellLap = _context.sent;
          _context.next = 21;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'ASUS ROG Laptop'
          }));

        case 21:
          AsusLap = _context.sent;
          return _context.abrupt("return", res.render('ContactUsPage', {
            admin: adminUser,
            // admin find
            orders: userOrders,
            // user Orders End
            wishlist: wishlistItems,
            // wishlist Items End
            cart: cartSession,
            // Cart sessions End
            // Fire TV ID
            TV: FireTV,
            // dellap
            dellap: DellLap,
            // asusLap
            asuslap: AsusLap
          }));

        case 23:
        case "end":
          return _context.stop();
      }
    }
  });
};

var contactUsMessage = function contactUsMessage(req, res) {
  var _req$body, name, email, message, userContactUs;

  return regeneratorRuntime.async(function contactUsMessage$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _req$body = req.body, name = _req$body.name, email = _req$body.email, message = _req$body.message;

          if (!(!name || !email || !message)) {
            _context2.next = 8;
            break;
          }

          req.flash('emptycontactusmessage', '!!Please enter an empty fields');
          req.flash('previousname', name);
          req.flash('previouemail', email);
          req.flash('previousmessage', message);
          return _context2.abrupt("return", res.redirect('/contactus'));

        case 8:
          _context2.next = 10;
          return regeneratorRuntime.awrap(new userMessage({
            name: name,
            email: email,
            message: message
          }));

        case 10:
          userContactUs = _context2.sent;
          userContactUs.save().then(function (result) {
            console.log(result);
            req.flash('successfullsend', 'Your messages has been send');
            return res.redirect('/contactus');
          })["catch"](function (err) {
            console.log(err);
          });
          _context2.next = 17;
          break;

        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);

        case 17:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 14]]);
};

module.exports = {
  ContactUsPage: ContactUsPage,
  contactUsMessage: contactUsMessage
};