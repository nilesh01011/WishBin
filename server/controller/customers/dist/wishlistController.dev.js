"use strict";

var Products = require('../../model/productsModel');

var User = require('../../model/user');

var WishlistItems = require('../../model/wishlistModel');

var orders = require('../../model/ordersModel');

var wishlistPageController = function wishlistPageController(req, res) {
  var userOrders, adminUser, FindAdmin, wishlistItems, userFind, cartSession, DellLap, AsusLap, FireTV;
  return regeneratorRuntime.async(function wishlistPageController$(_context) {
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
          // cartSession
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
          return _context.abrupt("return", res.render('WishListPage', {
            admin: adminUser,
            // cart session
            cart: cartSession,
            // Fire TV ID
            TV: FireTV,
            // dellap
            dellap: DellLap,
            // asusLap
            asuslap: AsusLap,
            // laptop End
            // WishList Items
            wishlist: wishlistItems,
            users: userFind,
            // user Orders
            orders: userOrders
          }));

        case 26:
        case "end":
          return _context.stop();
      }
    }
  });
};

var wishlistItemsDeleteController = function wishlistItemsDeleteController(req, res) {
  var DeleteWishList, WishListItemsDelete;
  return regeneratorRuntime.async(function wishlistItemsDeleteController$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          DeleteWishList = req.params.id;
          _context2.next = 3;
          return regeneratorRuntime.awrap(WishlistItems.deleteOne({
            _id: DeleteWishList
          }));

        case 3:
          WishListItemsDelete = _context2.sent;
          res.send({
            WishListItemsDelete: WishListItemsDelete
          });

        case 5:
        case "end":
          return _context2.stop();
      }
    }
  });
};

module.exports = {
  wishlistPageController: wishlistPageController,
  wishlistItemsDeleteController: wishlistItemsDeleteController
};