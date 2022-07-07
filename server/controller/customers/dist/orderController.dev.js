"use strict";

var Products = require('../../model/productsModel');

var orders = require('../../model/ordersModel');

var User = require('../../model/user');

var moment = require('moment');

var WishlistItems = require('../../model/wishlistModel');

var orderPage = function orderPage(req, res) {
  var userOrders, adminUser, FindAdmin, wishlistItems, userFind, cartSession, DellLap, AsusLap, FireTV;
  return regeneratorRuntime.async(function orderPage$(_context) {
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
          _context.next = 14;
          return regeneratorRuntime.awrap(User.findOne({
            _id: req.user
          }));

        case 14:
          userFind = _context.sent;
          // Carts Details
          cartSession = req.session.addcart; // dellap

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
          _context.next = 24;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Sony Bravia 4K 49Inch'
          }));

        case 24:
          FireTV = _context.sent;
          return _context.abrupt("return", res.render('OrderPage', {
            admin: adminUser,
            // cart session
            cart: cartSession,
            // Fire TV ID
            TV: FireTV,
            // dellap
            dellap: DellLap,
            // asusLap
            asuslap: AsusLap,
            // user Orders
            orders: userOrders,
            users: userFind,
            moment: moment,
            // WishList Items
            wishlist: wishlistItems
          }));

        case 26:
        case "end":
          return _context.stop();
      }
    }
  });
};

var orderTracker = function orderTracker(req, res) {
  var userOrders, adminUser, FindAdmin, orderProduct, wishlistItems, userFind, cartSession, DellLap, AsusLap, FireTV;
  return regeneratorRuntime.async(function orderTracker$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;

          if (!req.user) {
            _context2.next = 9;
            break;
          }

          _context2.next = 4;
          return regeneratorRuntime.awrap(orders.find({
            customerId: req.user._id
          }, null, {
            sort: {
              createdAt: -1
            }
          }));

        case 4:
          userOrders = _context2.sent;
          _context2.next = 7;
          return regeneratorRuntime.awrap(User.findOne({
            _id: req.user._id
          }));

        case 7:
          FindAdmin = _context2.sent;
          adminUser = FindAdmin.role;

        case 9:
          _context2.next = 11;
          return regeneratorRuntime.awrap(orders.findOne({
            _id: req.query.orderId
          }));

        case 11:
          orderProduct = _context2.sent;

          if (!req.user) {
            _context2.next = 16;
            break;
          }

          _context2.next = 15;
          return regeneratorRuntime.awrap(WishlistItems.find({
            customerId: req.user._id
          }));

        case 15:
          wishlistItems = _context2.sent;

        case 16:
          _context2.next = 18;
          return regeneratorRuntime.awrap(User.findOne({
            _id: req.user
          }));

        case 18:
          userFind = _context2.sent;
          // Carts Details
          cartSession = req.session.addcart; // dellap

          _context2.next = 22;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Dell Alienware'
          }));

        case 22:
          DellLap = _context2.sent;
          _context2.next = 25;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'ASUS ROG Laptop'
          }));

        case 25:
          AsusLap = _context2.sent;
          _context2.next = 28;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Sony Bravia 4K 49Inch'
          }));

        case 28:
          FireTV = _context2.sent;

          if (orderProduct) {
            res.render('TrackOrderPage', {
              admin: adminUser,
              // cart session
              cart: cartSession,
              // Fire TV ID
              TV: FireTV,
              // dellap
              dellap: DellLap,
              // asusLap
              asuslap: AsusLap,
              // user Orders
              orders: userOrders,
              users: userFind,
              moment: moment,
              // WishList Items
              wishlist: wishlistItems,
              // order Details
              Items: orderProduct
            });
          } else {
            res.redirect('/orderpage');
          }

          _context2.next = 35;
          break;

        case 32:
          _context2.prev = 32;
          _context2.t0 = _context2["catch"](0);
          console.log('Track Order Page Error', _context2.t0);

        case 35:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 32]]);
};

module.exports = {
  orderPage: orderPage,
  orderTracker: orderTracker
};