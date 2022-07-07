"use strict";

require('dotenv').config();

var cartController = require('../controller/customers/cartController');

var orderController = require('../controller/customers/orderController');

var wishlistController = require('../controller/customers/wishlistController');

var home = require('../controller/homeData');

var _require = require('../controller/UsersData/users'),
    UserRegis = _require.UserRegis,
    UserLogin = _require.UserLogin,
    UserLogout = _require.UserLogout;

var Products = require('../model/productsModel');

var WishlistItems = require('../model/wishlistModel');

var orders = require('../model/ordersModel');

var adminPage = require('../controller/admin/pages');

var orderStatus = require('../controller/admin/orderStatus');

var User = require('../model/user');

var payment = require('../controller/customers/paymentController');

var auth = require('../middleware/auth');

var admin = require('../middleware/admin');

var Pages = require('../controller/Products');

var bcrypt = require('bcrypt');

var ContactUs = require('../controller/customers/contactUs');

var forgetPassword = require('../controller/UsersData/resetPassword');

var Message = require('../model/userContactUs');

function initRoutes(app) {
  // Admin Dashboard
  app.get('/api/adminPage/dashboard', admin, adminPage.Page);
  app.get('/api/adminPage/messages', admin, adminPage.MessagesContactUs);
  app.post('/api/adminPage/messages', admin, function (req, res) {
    Message.findByIdAndDelete({
      _id: req.body.msgId
    }, function (err, data) {
      if (err) {
        console.log(err);
      }

      res.redirect('/api/adminPage/messages');
    });
  });
  app.get('/api/adminPage/customer', admin, adminPage.CustomerPage);
  app.post('/api/adminPage/customer', admin, function (req, res) {
    try {
      User.updateOne({
        _id: req.body.userId
      }, {
        role: req.body.userRole
      }, function (err, data) {
        if (err) {
          console.log(err);
          res.redirect('/api/adminPage/customer');
        }

        res.redirect('/api/adminPage/customer');
      });
    } catch (error) {
      console.log(error);
    }
  });
  app.get('/api/adminPage/orders', admin, adminPage.OrderPage);
  app.get('/api/adminPage/preview', admin, adminPage.PreviewPage);
  app.get('/api/adminPage/productdetails', admin, adminPage.ProductDetailsPage);
  app.post('/api/adminPage/orders', admin, orderStatus);
  app.get('/api/adminPage/userprofile', admin, adminPage.UserProfilePage); // ====== Search API

  app.get('/searchresult', home.SearchPageController);
  app.post('/searchresult/:key', home.SearchDateController); // =====================================================

  app.get('/', home.homeIndex);
  app.get('/electronicproduct', Pages.ElectronicPage);
  app.get('/toysproducts', Pages.ToysPage);
  app.get('/mobileproducts', Pages.MobilePage);
  app.get('/clothproducts', Pages.ClothPage);
  app.get('/babyclothproducts', Pages.BabyClothPage);
  app.get('/furnitureproducts', Pages.FurniturePage);
  app.get('/groceriesproducts', Pages.GroceriesPage);
  app.get('/gameproducts', Pages.GamePage);
  app.get('/computerproducts', Pages.ComputerPage); // ===========================WishList Details=========================

  app.get('/wishlistpage', auth, wishlistController.wishlistPageController);
  app["delete"]('/wishlist-delete/:id', wishlistController.wishlistItemsDeleteController);
  app.post('/wishlist-add', home.wishlistAddController); // ===========================WishList Details End======================

  app.get('/orderpage', auth, orderController.orderPage);
  app.get('/paymentpage', payment.paymentPageController);
  app.post('/orders', payment.paymentController);
  app.get('/ordertrack', orderController.orderTracker);
  app.post('/ordertrack/:id', function _callee(req, res) {
    var orderProducdID, orderIDFetch;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            orderProducdID = req.body;
            _context.next = 4;
            return regeneratorRuntime.awrap(orders.findOne({
              _id: orderProducdID
            }));

          case 4:
            orderIDFetch = _context.sent;
            res.send({
              orderItems: orderIDFetch
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
  });
  app["delete"]('/orderpageproductdelete/:id', function _callee2(req, res) {
    var DeleteOrder, fetchOrder;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            DeleteOrder = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return regeneratorRuntime.awrap(orders.findByIdAndDelete({
              _id: DeleteOrder
            }));

          case 4:
            fetchOrder = _context2.sent;
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](1);
            console.log(_context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[1, 7]]);
  }); // ===========================Get Product Details=========================

  app.get('/productdetails', function _callee3(req, res) {
    var userOrders, adminUser, FindAdmin, wishlistItems, cartSession, DellLap, AsusLap, FireTV;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            if (!req.user) {
              _context3.next = 8;
              break;
            }

            _context3.next = 3;
            return regeneratorRuntime.awrap(orders.find({
              customerId: req.user._id
            }, null, {
              sort: {
                createdAt: -1
              }
            }));

          case 3:
            userOrders = _context3.sent;
            _context3.next = 6;
            return regeneratorRuntime.awrap(User.findOne({
              _id: req.user._id
            }));

          case 6:
            FindAdmin = _context3.sent;
            adminUser = FindAdmin.role;

          case 8:
            if (!req.user) {
              _context3.next = 12;
              break;
            }

            _context3.next = 11;
            return regeneratorRuntime.awrap(WishlistItems.find({
              customerId: req.user._id
            }));

          case 11:
            wishlistItems = _context3.sent;

          case 12:
            // Cart count
            cartSession = req.session.addcart; // dellap

            _context3.next = 15;
            return regeneratorRuntime.awrap(Products.findOne({
              title: 'Dell Alienware'
            }));

          case 15:
            DellLap = _context3.sent;
            _context3.next = 18;
            return regeneratorRuntime.awrap(Products.findOne({
              title: 'ASUS ROG Laptop'
            }));

          case 18:
            AsusLap = _context3.sent;
            _context3.next = 21;
            return regeneratorRuntime.awrap(Products.findOne({
              title: 'Sony Bravia 4K 49Inch'
            }));

          case 21:
            FireTV = _context3.sent;
            res.render('Products_Details', {
              admin: adminUser,
              // cart session
              cart: cartSession,
              // Fire TV ID
              TV: FireTV,
              // dellap
              dellap: DellLap,
              // asusLap
              asuslap: AsusLap,
              // wishlists
              wishlist: wishlistItems,
              // user Orders
              orders: userOrders
            });

          case 23:
          case "end":
            return _context3.stop();
        }
      }
    });
  }); // ==========================UserProfiles Pages===========================

  app.get('/userprofile', function _callee4(req, res) {
    var userOrders, adminUser, FindAdmin, wishlistItems, userFind, UserImages, cartSession, DellLap, AsusLap, FireTV;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (!req.user) {
              _context4.next = 8;
              break;
            }

            _context4.next = 3;
            return regeneratorRuntime.awrap(orders.find({
              customerId: req.user._id
            }, null, {
              sort: {
                createdAt: -1
              }
            }));

          case 3:
            userOrders = _context4.sent;
            _context4.next = 6;
            return regeneratorRuntime.awrap(User.findOne({
              _id: req.user._id
            }));

          case 6:
            FindAdmin = _context4.sent;
            adminUser = FindAdmin.role;

          case 8:
            if (!req.user) {
              _context4.next = 12;
              break;
            }

            _context4.next = 11;
            return regeneratorRuntime.awrap(WishlistItems.find({
              customerId: req.user._id
            }));

          case 11:
            wishlistItems = _context4.sent;

          case 12:
            _context4.next = 14;
            return regeneratorRuntime.awrap(User.findOne({
              _id: req.user
            }));

          case 14:
            userFind = _context4.sent;
            UserImages = userFind.userImage; // Cart count

            cartSession = req.session.addcart; // dellap

            _context4.next = 19;
            return regeneratorRuntime.awrap(Products.findOne({
              title: 'Dell Alienware'
            }));

          case 19:
            DellLap = _context4.sent;
            _context4.next = 22;
            return regeneratorRuntime.awrap(Products.findOne({
              title: 'ASUS ROG Laptop'
            }));

          case 22:
            AsusLap = _context4.sent;
            _context4.next = 25;
            return regeneratorRuntime.awrap(Products.findOne({
              title: 'Sony Bravia 4K 49Inch'
            }));

          case 25:
            FireTV = _context4.sent;
            res.render('UserProfile', {
              admin: adminUser,
              // cart session
              cart: cartSession,
              // Fire TV ID
              TV: FireTV,
              // dellap
              dellap: DellLap,
              // asusLap
              asuslap: AsusLap,
              // User Data
              userData: userFind,
              userProfile: UserImages,
              // Wishlist
              wishlist: wishlistItems,
              // user Orders
              orders: userOrders
            });

          case 27:
          case "end":
            return _context4.stop();
        }
      }
    });
  });
  app.get('/userdataupdate', function _callee5(req, res) {
    var userOrders, adminUser, FindAdmin, wishlistItems, userFind, cartSession, DellLap, AsusLap, FireTV;
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            if (!req.user) {
              _context5.next = 8;
              break;
            }

            _context5.next = 3;
            return regeneratorRuntime.awrap(orders.find({
              customerId: req.user._id
            }, null, {
              sort: {
                createdAt: -1
              }
            }));

          case 3:
            userOrders = _context5.sent;
            _context5.next = 6;
            return regeneratorRuntime.awrap(User.findOne({
              _id: req.user._id
            }));

          case 6:
            FindAdmin = _context5.sent;
            adminUser = FindAdmin.role;

          case 8:
            if (!req.user) {
              _context5.next = 12;
              break;
            }

            _context5.next = 11;
            return regeneratorRuntime.awrap(WishlistItems.find({
              customerId: req.user._id
            }));

          case 11:
            wishlistItems = _context5.sent;

          case 12:
            _context5.next = 14;
            return regeneratorRuntime.awrap(User.findOne({
              _id: req.user
            }));

          case 14:
            userFind = _context5.sent;
            // console.log(userFind);
            // Cart count
            cartSession = req.session.addcart; // dellap

            _context5.next = 18;
            return regeneratorRuntime.awrap(Products.findOne({
              title: 'Dell Alienware'
            }));

          case 18:
            DellLap = _context5.sent;
            _context5.next = 21;
            return regeneratorRuntime.awrap(Products.findOne({
              title: 'ASUS ROG Laptop'
            }));

          case 21:
            AsusLap = _context5.sent;
            _context5.next = 24;
            return regeneratorRuntime.awrap(Products.findOne({
              title: 'Sony Bravia 4K 49Inch'
            }));

          case 24:
            FireTV = _context5.sent;
            res.render('UserDataUpdate', {
              admin: adminUser,
              // cart session
              cart: cartSession,
              // Fire TV ID
              TV: FireTV,
              // dellap
              dellap: DellLap,
              // asusLap
              asuslap: AsusLap,
              // User Data
              userData: userFind,
              // Wishlist
              wishlist: wishlistItems,
              // user Orders
              orders: userOrders
            });

          case 26:
          case "end":
            return _context5.stop();
        }
      }
    });
  });
  app.post('/userdataupdate', function _callee6(req, res) {
    var username, userphone, useraddress, userOldPassword, userNewPassword, userID, updataUserData, OldPasswordCompare, NewPassword, _updataUserData;

    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            username = req.body.name;
            userphone = req.body.phone;
            useraddress = req.body.address;
            userOldPassword = req.body.password;
            userNewPassword = req.body.newpassword;
            userID = req.user._id;
            _context6.prev = 6;

            if (!(!userOldPassword && !userNewPassword)) {
              _context6.next = 11;
              break;
            }

            _context6.next = 10;
            return regeneratorRuntime.awrap(User.findOneAndUpdate({
              _id: userID
            }, {
              $set: {
                name: username,
                phone: userphone,
                address: useraddress
              }
            }, {
              "new": true
            }, function (err, data) {
              if (err) {
                console.log(err);
              } else {
                // console.log('=================', data);
                res.redirect('/userprofile');
              }
            }));

          case 10:
            updataUserData = _context6.sent;

          case 11:
            _context6.next = 13;
            return regeneratorRuntime.awrap(bcrypt.compare(userOldPassword, req.user.password));

          case 13:
            OldPasswordCompare = _context6.sent;

            if (!req.body.password) {
              _context6.next = 34;
              break;
            }

            if (!(OldPasswordCompare == true)) {
              _context6.next = 29;
              break;
            }

            if (userNewPassword) {
              _context6.next = 21;
              break;
            }

            req.flash('emptypassword', '!!Please enter a password');
            res.redirect('/userdataupdate');
            _context6.next = 27;
            break;

          case 21:
            _context6.next = 23;
            return regeneratorRuntime.awrap(bcrypt.hash(userNewPassword, 10));

          case 23:
            NewPassword = _context6.sent;
            _context6.next = 26;
            return regeneratorRuntime.awrap(User.findOneAndUpdate({
              _id: userID
            }, {
              $set: {
                name: username,
                phone: userphone,
                address: useraddress,
                password: NewPassword
              }
            }, {
              "new": true
            }, function (err, data) {
              if (err) {
                console.log(err);
              } else {
                // console.log('=================', data);
                res.redirect('/userprofile');
              }
            }));

          case 26:
            _updataUserData = _context6.sent;

          case 27:
            _context6.next = 32;
            break;

          case 29:
            console.log('Password input wrong');
            req.flash('invalidpassword', '!!Invalid password input');
            res.redirect('/userdataupdate');

          case 32:
            _context6.next = 37;
            break;

          case 34:
            console.log('Password input wrong');
            req.flash('invalidpassword', '!!Invalid password input');
            res.redirect('/userdataupdate');

          case 37:
            _context6.next = 42;
            break;

          case 39:
            _context6.prev = 39;
            _context6.t0 = _context6["catch"](6);
            console.log(_context6.t0);

          case 42:
          case "end":
            return _context6.stop();
        }
      }
    }, null, null, [[6, 39]]);
  }); // ===========================Cart Pages=========================

  app.get('/cartpage', cartController.cart);
  app.post('/add-cartpage', cartController.AddToCart);
  app.patch('/update-product-cartpage/:id', cartController.UpdateCart);
  app["delete"]('/remove-cartpage/:id', cartController.removeitems); // ===============================Login and Registers=========================
  // Registers Users Data

  app.post('/register', UserRegis);
  app.get('/register', function (req, res) {
    res.render('RegisterPage');
  }); // Login User Data

  app.post('/login', UserLogin); // app.post('/login', postLogin);

  app.get('/login', function (req, res) {
    res.render('LoginPage');
  });
  app.get('/forgetpassword', forgetPassword.forgetPasswordPage); // const currentDateTime = new Date();

  app.post('/forgetpassword', forgetPassword.forgetPasswordPost); // reset password

  app.get('/resetpassword', forgetPassword.resetPasswordPage);
  app.post('/resetpassword', forgetPassword.resetPasswordPost); // user Logouts

  app.post('/logout', UserLogout); // Contact Us Page

  app.get('/contactus', ContactUs.ContactUsPage);
  app.post('/contactus', ContactUs.contactUsMessage); // Error

  app.get('*', function _callee7(req, res) {
    var adminUser, FindAdmin, DellLap, AsusLap, FireTV;
    return regeneratorRuntime.async(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            if (!req.user) {
              _context7.next = 5;
              break;
            }

            _context7.next = 3;
            return regeneratorRuntime.awrap(User.findOne({
              _id: req.user._id
            }));

          case 3:
            FindAdmin = _context7.sent;
            adminUser = FindAdmin.role;

          case 5:
            _context7.next = 7;
            return regeneratorRuntime.awrap(Products.findOne({
              title: 'Dell Alienware'
            }));

          case 7:
            DellLap = _context7.sent;
            _context7.next = 10;
            return regeneratorRuntime.awrap(Products.findOne({
              title: 'ASUS ROG Laptop'
            }));

          case 10:
            AsusLap = _context7.sent;
            _context7.next = 13;
            return regeneratorRuntime.awrap(Products.findOne({
              title: 'Sony Bravia 4K 49Inch'
            }));

          case 13:
            FireTV = _context7.sent;
            res.render('Error', {
              admin: adminUser,
              // Fire TV ID
              TV: FireTV,
              // dellap
              dellap: DellLap,
              // asusLap
              asuslap: AsusLap
            });

          case 15:
          case "end":
            return _context7.stop();
        }
      }
    });
  });
}

module.exports = initRoutes;