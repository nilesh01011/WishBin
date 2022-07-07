"use strict";

var Products = require('../../model/productsModel');

var orders = require('../../model/ordersModel');

var moment = require('moment');

var User = require('../../model/user');

var Messages = require('../../model/userContactUs');

function sumOfAll(arr) {
  var sum = 0;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var a = _step.value;
      sum += a;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return sum;
}

var Page = function Page(req, res) {
  var messages, AllMessages, adminUser, userOrders, totalpriceInArray, SubTotalPrice, user;
  return regeneratorRuntime.async(function Page$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Messages.find().limit(3));

        case 3:
          messages = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(Messages.find());

        case 6:
          AllMessages = _context.sent;
          // user orders
          adminUser = req.user;
          _context.next = 10;
          return regeneratorRuntime.awrap(orders.find({}, null, {
            sort: {
              createdAt: -1
            }
          }));

        case 10:
          userOrders = _context.sent;
          // totalIncome Amount
          totalpriceInArray = [];
          userOrders.forEach(function (ele) {
            totalpriceInArray.push(ele.totalPrice);
          });
          SubTotalPrice = sumOfAll(totalpriceInArray); // All User length

          _context.next = 16;
          return regeneratorRuntime.awrap(User.find({}));

        case 16:
          user = _context.sent;
          res.render('api/adminPage/dashboard', {
            orders: userOrders,
            moment: moment,
            totalIncome: SubTotalPrice,
            userLength: user,
            user: adminUser,
            msg: messages,
            allMsg: AllMessages
          });
          _context.next = 23;
          break;

        case 20:
          _context.prev = 20;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 23:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 20]]);
};

var CustomerPage = function CustomerPage(req, res) {
  var messages, AllMessages, superAdmin, adminUser, FindAdmin, AllUser;
  return regeneratorRuntime.async(function CustomerPage$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Messages.find().limit(3));

        case 3:
          messages = _context2.sent;
          _context2.next = 6;
          return regeneratorRuntime.awrap(Messages.find());

        case 6:
          AllMessages = _context2.sent;
          adminUser = req.user;

          if (!req.user) {
            _context2.next = 13;
            break;
          }

          _context2.next = 11;
          return regeneratorRuntime.awrap(User.findOne({
            _id: req.user._id
          }));

        case 11:
          FindAdmin = _context2.sent;
          superAdmin = FindAdmin.role;

        case 13:
          _context2.next = 15;
          return regeneratorRuntime.awrap(User.find({}));

        case 15:
          AllUser = _context2.sent;
          res.render('api/adminPage/customer', {
            admin: superAdmin,
            customer: AllUser,
            user: adminUser,
            msg: messages,
            allMsg: AllMessages
          });
          _context2.next = 22;
          break;

        case 19:
          _context2.prev = 19;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);

        case 22:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 19]]);
};

var OrderPage = function OrderPage(req, res) {
  var messages, AllMessages, adminUser, userOrders;
  return regeneratorRuntime.async(function OrderPage$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(Messages.find().limit(3));

        case 3:
          messages = _context3.sent;
          _context3.next = 6;
          return regeneratorRuntime.awrap(Messages.find());

        case 6:
          AllMessages = _context3.sent;
          adminUser = req.user; // User orders

          _context3.next = 10;
          return regeneratorRuntime.awrap(orders.find({}, null, {
            sort: {
              createdAt: -1
            }
          }));

        case 10:
          userOrders = _context3.sent;
          res.render('api/adminPage/orders', {
            orders: userOrders,
            moment: moment,
            user: adminUser,
            msg: messages,
            allMsg: AllMessages
          });
          _context3.next = 17;
          break;

        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](0);
          console.log(_context3.t0);

        case 17:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 14]]);
};

var PreviewPage = function PreviewPage(req, res) {
  var messages, AllMessages, adminUser, getAllProducts, getAllElectronics, getAllToys, getAllCloths, getAllBabyCloths, getAllMobile, getAllFurniture, getAllGroceries, getAllGames, getAllComputer;
  return regeneratorRuntime.async(function PreviewPage$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(Messages.find().limit(3));

        case 3:
          messages = _context4.sent;
          _context4.next = 6;
          return regeneratorRuntime.awrap(Messages.find());

        case 6:
          AllMessages = _context4.sent;
          adminUser = req.user; // ====All Product Fetchs

          _context4.next = 10;
          return regeneratorRuntime.awrap(Products.find());

        case 10:
          getAllProducts = _context4.sent;
          _context4.next = 13;
          return regeneratorRuntime.awrap(Products.find({
            category: 'Electronics'
          }));

        case 13:
          getAllElectronics = _context4.sent;
          _context4.next = 16;
          return regeneratorRuntime.awrap(Products.find({
            category: 'Toys'
          }));

        case 16:
          getAllToys = _context4.sent;
          _context4.next = 19;
          return regeneratorRuntime.awrap(Products.find({
            category: 'Cloths'
          }));

        case 19:
          getAllCloths = _context4.sent;
          _context4.next = 22;
          return regeneratorRuntime.awrap(Products.find({
            category: 'BabyCloths'
          }));

        case 22:
          getAllBabyCloths = _context4.sent;
          _context4.next = 25;
          return regeneratorRuntime.awrap(Products.find({
            category: 'Mobiles'
          }));

        case 25:
          getAllMobile = _context4.sent;
          _context4.next = 28;
          return regeneratorRuntime.awrap(Products.find({
            category: 'Furniture'
          }));

        case 28:
          getAllFurniture = _context4.sent;
          _context4.next = 31;
          return regeneratorRuntime.awrap(Products.find({
            category: 'Groceries'
          }));

        case 31:
          getAllGroceries = _context4.sent;
          _context4.next = 34;
          return regeneratorRuntime.awrap(Products.find({
            category: 'Games'
          }));

        case 34:
          getAllGames = _context4.sent;
          _context4.next = 37;
          return regeneratorRuntime.awrap(Products.find({
            category: 'Computer'
          }));

        case 37:
          getAllComputer = _context4.sent;
          res.render('api/adminPage/Preview', {
            data: getAllProducts,
            electronics: getAllElectronics,
            toys: getAllToys,
            cloths: getAllCloths,
            babycloths: getAllBabyCloths,
            mobile: getAllMobile,
            furniture: getAllFurniture,
            groceries: getAllGroceries,
            games: getAllGames,
            computer: getAllComputer,
            user: adminUser,
            msg: messages,
            allMsg: AllMessages
          });
          _context4.next = 44;
          break;

        case 41:
          _context4.prev = 41;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);

        case 44:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 41]]);
};

var ProductDetailsPage = function ProductDetailsPage(req, res) {
  var messages, AllMessages, adminUser;
  return regeneratorRuntime.async(function ProductDetailsPage$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(Messages.find().limit(3));

        case 2:
          messages = _context5.sent;
          _context5.next = 5;
          return regeneratorRuntime.awrap(Messages.find());

        case 5:
          AllMessages = _context5.sent;
          adminUser = req.user;
          res.render('api/adminPage/ProductDetails', {
            user: adminUser,
            msg: messages,
            allMsg: AllMessages
          });

        case 8:
        case "end":
          return _context5.stop();
      }
    }
  });
};

var UserProfilePage = function UserProfilePage(req, res) {
  var user, messages, AllMessages;
  return regeneratorRuntime.async(function UserProfilePage$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          user = req.user;
          _context6.next = 3;
          return regeneratorRuntime.awrap(Messages.find().limit(3));

        case 3:
          messages = _context6.sent;
          _context6.next = 6;
          return regeneratorRuntime.awrap(Messages.find());

        case 6:
          AllMessages = _context6.sent;
          res.render('api/adminPage/userProfile', {
            msg: messages,
            allMsg: AllMessages,
            user: user
          });

        case 8:
        case "end":
          return _context6.stop();
      }
    }
  });
};

var MessagesContactUs = function MessagesContactUs(req, res) {
  var messages, AllMessages;
  return regeneratorRuntime.async(function MessagesContactUs$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap(Messages.find().limit(3));

        case 2:
          messages = _context7.sent;
          _context7.next = 5;
          return regeneratorRuntime.awrap(Messages.find());

        case 5:
          AllMessages = _context7.sent;
          res.render('api/adminPage/messages', {
            msg: messages,
            allMsg: AllMessages
          });

        case 7:
        case "end":
          return _context7.stop();
      }
    }
  });
};

module.exports = {
  Page: Page,
  CustomerPage: CustomerPage,
  OrderPage: OrderPage,
  PreviewPage: PreviewPage,
  ProductDetailsPage: ProductDetailsPage,
  MessagesContactUs: MessagesContactUs,
  UserProfilePage: UserProfilePage
};