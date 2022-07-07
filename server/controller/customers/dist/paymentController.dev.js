"use strict";

var User = require('../../model/user');

var orders = require('../../model/ordersModel');

var paymentPageController = function paymentPageController(req, res) {
  var cartSession, userFind;
  return regeneratorRuntime.async(function paymentPageController$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          cartSession = req.session.addcart; //  User Details

          _context.next = 3;
          return regeneratorRuntime.awrap(User.findOne({
            _id: req.user
          }));

        case 3:
          userFind = _context.sent;
          // Cart count
          res.render('ProcessedToBuyPage', {
            userData: userFind,
            cart: cartSession
          });

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
};

var paymentController = function paymentController(req, res) {
  var userID, cartSession, _req$body, phone, address, cardnumber, cardexpdate, cardcvv, name, Items, _i, _Object$values, list, order;

  return regeneratorRuntime.async(function paymentController$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          userID = req.user._id;
          cartSession = req.session.addcart;
          _req$body = req.body, phone = _req$body.phone, address = _req$body.address, cardnumber = _req$body.cardnumber, cardexpdate = _req$body.cardexpdate, cardcvv = _req$body.cardcvv, name = _req$body.name;

          if (!phone || !address || !cardnumber || !cardexpdate || !cardcvv) {
            req.flash('paymenterror', 'All fields are required');
            res.redirect('/paymentpage');
          }

          if (cardnumber < 16) {
            req.flash('cardnumber', '!Your Card Number invalid');
            res.redirect('/paymentpage');
          }

          Items = [];

          for (_i = 0, _Object$values = Object.values(cartSession.items); _i < _Object$values.length; _i++) {
            list = _Object$values[_i];
            Items.push(list);
          } // cartSession.items


          Items.forEach(function _callee(ele) {
            return regeneratorRuntime.async(function _callee$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return regeneratorRuntime.awrap(new orders({
                      customerId: userID,
                      items: ele,
                      phone: phone,
                      address: address,
                      totalPrice: ele.totalItemPrice,
                      name: name
                    }));

                  case 2:
                    order = _context2.sent;
                    order.save().then(function (result) {
                      req.flash('success', 'Order Placed Successfully...');
                      delete req.session.addcart; // Emitter emit event

                      var eventEmitter = req.app.get('eventEmitter');
                      eventEmitter.emit('orderPlaced', result);
                      return res.redirect('/orderpage');
                    })["catch"](function (err) {
                      req.flash('error', 'Something went wrong');
                      console.log(err);
                      return res.redirect('/paymentpage');
                    });

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            });
          });

        case 8:
        case "end":
          return _context3.stop();
      }
    }
  });
};

module.exports = {
  paymentPageController: paymentPageController,
  paymentController: paymentController
};