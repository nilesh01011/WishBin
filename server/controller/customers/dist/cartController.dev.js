"use strict";

var _require = require('dotenv'),
    parse = _require.parse;

var Products = require('../../model/productsModel');

var WishlistItems = require('../../model/wishlistModel');

var orders = require('../../model/ordersModel');

var User = require('../../model/user');

var cart = function cart(req, res) {
  var userOrders, adminUser, FindAdmin, wishlistItems, cartSession, DellLap, AsusLap, FireTV;
  return regeneratorRuntime.async(function cart$(_context) {
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
          // CartSessions
          cartSession = req.session.addcart; // dellap

          _context.next = 15;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Dell Alienware'
          }));

        case 15:
          DellLap = _context.sent;
          _context.next = 18;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'ASUS ROG Laptop'
          }));

        case 18:
          AsusLap = _context.sent;
          _context.next = 21;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Sony Bravia 4K 49Inch'
          }));

        case 21:
          FireTV = _context.sent;
          return _context.abrupt("return", res.render('CartPage', {
            admin: adminUser,
            // cart session
            cart: cartSession,
            // Fire TV ID
            TV: FireTV,
            // dellap
            dellap: DellLap,
            // asusLap
            asuslap: AsusLap,
            // QTY in DBMS
            // WishList Items
            wishlist: wishlistItems,
            // user Orders
            orders: userOrders
          }));

        case 23:
        case "end":
          return _context.stop();
      }
    }
  });
};

var AddToCart = function AddToCart(req, res) {
  var cartSession;
  return regeneratorRuntime.async(function AddToCart$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          // Cart session store Structures
          // let cart = {
          //   items: {
          //     productID : { item: productObject, qty:0 }
          //   },
          //   totalQTY: 0,
          //   totalPrice:0
          // }
          // First times add to carts
          if (!req.session.addcart) {
            req.session.addcart = {
              items: {},
              totalQTY: 0,
              totalPrice: 0
            };
          } // Check if items dose not there in carts


          cartSession = req.session.addcart; // console.log(req.body);
          // cartSession Add

          if (!cartSession.items[req.body._id]) {
            cartSession.items[req.body._id] = {
              item: req.body,
              qty: 1,
              totalItemPrice: req.body.price
            };
            cartSession.totalQTY = cartSession.totalQTY + 1;
            cartSession.totalPrice = cartSession.totalPrice + req.body.price;
          } else {
            cartSession.items[req.body._id].qty = cartSession.items[req.body._id].qty + 1;
            cartSession.items[req.body._id].totalItemPrice = cartSession.items[req.body._id].totalItemPrice + req.body.price;
            cartSession.totalQty = cartSession.totalQty + 1;
            cartSession.totalPrice = cartSession.totalPrice + req.body.price;
          }

          return _context2.abrupt("return", res.send({
            totalQTY: cartSession.totalQTY,
            session: cartSession
          }));

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
}; // ==================================================================
// ==================================================================
// Update cart Quantity to the cart


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

var UpdateCart = function UpdateCart(req, res) {
  var cartSession = req.session.addcart;
  var productItemQty = req.body;
  var GetQty = parseInt(productItemQty.qty); // User selected GetQTY

  var GetID = productItemQty.ItemsID; // Product Id

  var total_Price = [];

  for (var _i = 0, _Object$values = Object.values(cartSession.items); _i < _Object$values.length; _i++) {
    var product = _Object$values[_i];

    if (product.item._id == GetID) {
      if (product.qty < GetQty) {
        // by default 1
        product.qty = GetQty;
        product.totalItemPrice = product.item.price * product.qty;
      } else {
        product.qty = GetQty;
        product.totalItemPrice = product.qty * product.item.price;
      }
    }

    total_Price.push(product.totalItemPrice);
  }

  cartSession.totalPrice = sumOfAll(total_Price);
  var SubTotalPrice = cartSession.totalPrice;
  res.send({
    SubTotalPrice: SubTotalPrice
  });
}; // ===================================================
// Delete items from cart


var removeitems = function removeitems(req, res) {
  var DeleteThisID = req.params.id;
  var cartSession = req.session.addcart;
  var GetID = cartSession.items;

  for (var _i2 = 0, _Object$values2 = Object.values(GetID); _i2 < _Object$values2.length; _i2++) {
    var id = _Object$values2[_i2];
    delete GetID[DeleteThisID];

    if (id.item._id === DeleteThisID) {
      if (id.qty > 1 && id.item.QTY > id.qty) {
        cartSession.totalQTY = cartSession.totalQTY - 1;
        cartSession.totalPrice = cartSession.totalPrice - id.totalItemPrice;
      } else {
        cartSession.totalQTY = cartSession.totalQTY - id.qty;
        cartSession.totalPrice = cartSession.totalPrice - id.totalItemPrice;
      }
    }
  }

  res.send({
    DeleteThisID: DeleteThisID
  });
};

module.exports = {
  cart: cart,
  AddToCart: AddToCart,
  UpdateCart: UpdateCart,
  removeitems: removeitems
};