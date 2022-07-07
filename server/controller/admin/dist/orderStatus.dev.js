"use strict";

var Products = require('../../model/productsModel');

var orders = require('../../model/ordersModel');

var moment = require('moment');

var User = require('../../model/user');

var orderStatus = function orderStatus(req, res) {
  var userOrders;
  return regeneratorRuntime.async(function orderStatus$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;

          // User orders
          try {
            orders.updateOne({
              _id: req.body.orderId
            }, {
              status: req.body.status
            }, function (err, data) {
              if (err) {
                res.redirect('/api/adminPage/orders');
              } // Emitter emit event


              var eventEmitter = req.app.get('eventEmitter');
              eventEmitter.emit('orderUpdated', {
                id: req.body.orderId,
                status: req.body.status
              });
              res.redirect('/api/adminPage/orders');
            });
          } catch (error) {
            console.log(error);
          }

          _context.next = 4;
          return regeneratorRuntime.awrap(orders.find({}, null, {
            sort: {
              createdAt: -1
            }
          }));

        case 4:
          userOrders = _context.sent;
          res.render('api/adminPage/orders', {
            orders: userOrders,
            moment: moment
          });
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

module.exports = orderStatus;