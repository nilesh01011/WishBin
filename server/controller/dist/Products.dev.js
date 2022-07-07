"use strict";

var Products = require('../model/productsModel');

var User = require('../model/user');

var WishlistItems = require('../model/wishlistModel');

var orders = require('../model/ordersModel');

var ElectronicPage = function ElectronicPage(req, res) {
  var userOrders, adminUser, FindAdmin, wishlistItems, cartSession, electronicsPro, FireTV, DellLap, AsusLap;
  return regeneratorRuntime.async(function ElectronicPage$(_context) {
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
          // Cart session
          cartSession = req.session.addcart; // Products Fetchs

          _context.next = 15;
          return regeneratorRuntime.awrap(Products.find({
            category: 'Electronics'
          }));

        case 15:
          electronicsPro = _context.sent;
          _context.next = 18;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Sony Bravia 4K 49Inch'
          }));

        case 18:
          FireTV = _context.sent;
          _context.next = 21;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Dell Alienware'
          }));

        case 21:
          DellLap = _context.sent;
          _context.next = 24;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'ASUS ROG Laptop'
          }));

        case 24:
          AsusLap = _context.sent;
          res.render('ElectronicProducts', {
            admin: adminUser,
            // cart session
            cart: cartSession,
            // wishlists
            wishlist: wishlistItems,
            // user Orders
            orders: userOrders,
            // Products
            elec: electronicsPro,
            // Fire TV ID
            TV: FireTV,
            // dellap
            dellap: DellLap,
            // asusLap
            asuslap: AsusLap
          });

        case 26:
        case "end":
          return _context.stop();
      }
    }
  });
};

var ToysPage = function ToysPage(req, res) {
  var userOrders, adminUser, FindAdmin, wishlistItems, cartSession, toysPro, FireTV, DellLap, AsusLap;
  return regeneratorRuntime.async(function ToysPage$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (!req.user) {
            _context2.next = 8;
            break;
          }

          _context2.next = 3;
          return regeneratorRuntime.awrap(orders.find({
            customerId: req.user._id
          }, null, {
            sort: {
              createdAt: -1
            }
          }));

        case 3:
          userOrders = _context2.sent;
          _context2.next = 6;
          return regeneratorRuntime.awrap(User.findOne({
            _id: req.user._id
          }));

        case 6:
          FindAdmin = _context2.sent;
          adminUser = FindAdmin.role;

        case 8:
          if (!req.user) {
            _context2.next = 12;
            break;
          }

          _context2.next = 11;
          return regeneratorRuntime.awrap(WishlistItems.find({
            customerId: req.user._id
          }));

        case 11:
          wishlistItems = _context2.sent;

        case 12:
          // Cart session
          cartSession = req.session.addcart; // Products Fetchs

          _context2.next = 15;
          return regeneratorRuntime.awrap(Products.find({
            category: 'Toys'
          }));

        case 15:
          toysPro = _context2.sent;
          _context2.next = 18;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Sony Bravia 4K 49Inch'
          }));

        case 18:
          FireTV = _context2.sent;
          _context2.next = 21;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Dell Alienware'
          }));

        case 21:
          DellLap = _context2.sent;
          _context2.next = 24;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'ASUS ROG Laptop'
          }));

        case 24:
          AsusLap = _context2.sent;
          res.render('ToysProducts', {
            admin: adminUser,
            // cart session
            cart: cartSession,
            // wishlists
            wishlist: wishlistItems,
            // user Orders
            orders: userOrders,
            // Products
            toys: toysPro,
            // Fire TV ID
            TV: FireTV,
            // dellap
            dellap: DellLap,
            // asusLap
            asuslap: AsusLap
          });

        case 26:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var MobilePage = function MobilePage(req, res) {
  var userOrders, adminUser, FindAdmin, wishlistItems, cartSession, mobPro, FireTV, DellLap, AsusLap, GetvivoZ6, GetonePlus, GetmiPhone, GetiPhone12PMax, GetSamsungphone;
  return regeneratorRuntime.async(function MobilePage$(_context3) {
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
          // Cart session
          cartSession = req.session.addcart; // Products Fetchs

          _context3.next = 15;
          return regeneratorRuntime.awrap(Products.find({
            category: 'Mobiles'
          }));

        case 15:
          mobPro = _context3.sent;
          _context3.next = 18;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Sony Bravia 4K 49Inch'
          }));

        case 18:
          FireTV = _context3.sent;
          _context3.next = 21;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Dell Alienware'
          }));

        case 21:
          DellLap = _context3.sent;
          _context3.next = 24;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'ASUS ROG Laptop'
          }));

        case 24:
          AsusLap = _context3.sent;
          _context3.next = 27;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Vivo Z6 5G'
          }));

        case 27:
          GetvivoZ6 = _context3.sent;
          _context3.next = 30;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'OnePlus 9R'
          }));

        case 30:
          GetonePlus = _context3.sent;
          _context3.next = 33;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Xiaomi Mi 11 Ultra'
          }));

        case 33:
          GetmiPhone = _context3.sent;
          _context3.next = 36;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'IPhone 12 Pro Max'
          }));

        case 36:
          GetiPhone12PMax = _context3.sent;
          _context3.next = 39;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Samsung Galaxy S21'
          }));

        case 39:
          GetSamsungphone = _context3.sent;
          res.render('MobilePage', {
            admin: adminUser,
            // cart session
            cart: cartSession,
            // wishlists
            wishlist: wishlistItems,
            // user Orders
            orders: userOrders,
            // Products
            mob: mobPro,
            // Fire TV ID
            TV: FireTV,
            // dellap
            dellap: DellLap,
            // asusLap
            asuslap: AsusLap,
            // Banner Links
            vivoZ6: GetvivoZ6,
            onePlus: GetonePlus,
            miPhone: GetmiPhone,
            iphone12: GetiPhone12PMax,
            samsungS21: GetSamsungphone
          });

        case 41:
        case "end":
          return _context3.stop();
      }
    }
  });
};

var ClothPage = function ClothPage(req, res) {
  var userOrders, adminUser, FindAdmin, wishlistItems, cartSession, cloPro, FireTV, DellLap, AsusLap;
  return regeneratorRuntime.async(function ClothPage$(_context4) {
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
          // Cart session
          cartSession = req.session.addcart; // Products Fetchs

          _context4.next = 15;
          return regeneratorRuntime.awrap(Products.find({
            category: 'Cloths'
          }));

        case 15:
          cloPro = _context4.sent;
          _context4.next = 18;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Sony Bravia 4K 49Inch'
          }));

        case 18:
          FireTV = _context4.sent;
          _context4.next = 21;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Dell Alienware'
          }));

        case 21:
          DellLap = _context4.sent;
          _context4.next = 24;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'ASUS ROG Laptop'
          }));

        case 24:
          AsusLap = _context4.sent;
          res.render('ClothProducts', {
            admin: adminUser,
            // cart session
            cart: cartSession,
            // wishlists
            wishlist: wishlistItems,
            // user Orders
            orders: userOrders,
            // Products
            clot: cloPro,
            // Fire TV ID
            TV: FireTV,
            // dellap
            dellap: DellLap,
            // asusLap
            asuslap: AsusLap
          });

        case 26:
        case "end":
          return _context4.stop();
      }
    }
  });
};

var BabyClothPage = function BabyClothPage(req, res) {
  var userOrders, adminUser, FindAdmin, wishlistItems, cartSession, babyPro, FireTV, DellLap, AsusLap;
  return regeneratorRuntime.async(function BabyClothPage$(_context5) {
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
          // Cart session
          cartSession = req.session.addcart; // Products Fetchs

          _context5.next = 15;
          return regeneratorRuntime.awrap(Products.find({
            category: 'BabyCloths'
          }));

        case 15:
          babyPro = _context5.sent;
          _context5.next = 18;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Sony Bravia 4K 49Inch'
          }));

        case 18:
          FireTV = _context5.sent;
          _context5.next = 21;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Dell Alienware'
          }));

        case 21:
          DellLap = _context5.sent;
          _context5.next = 24;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'ASUS ROG Laptop'
          }));

        case 24:
          AsusLap = _context5.sent;
          res.render('BabyClothProducts', {
            admin: adminUser,
            // cart session
            cart: cartSession,
            // wishlists
            wishlist: wishlistItems,
            // user Orders
            orders: userOrders,
            // Products
            baby: babyPro,
            // Fire TV ID
            TV: FireTV,
            // dellap
            dellap: DellLap,
            // asusLap
            asuslap: AsusLap
          });

        case 26:
        case "end":
          return _context5.stop();
      }
    }
  });
};

var FurniturePage = function FurniturePage(req, res) {
  var userOrders, adminUser, FindAdmin, wishlistItems, cartSession, furPro, FireTV, DellLap, AsusLap;
  return regeneratorRuntime.async(function FurniturePage$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          if (!req.user) {
            _context6.next = 8;
            break;
          }

          _context6.next = 3;
          return regeneratorRuntime.awrap(orders.find({
            customerId: req.user._id
          }, null, {
            sort: {
              createdAt: -1
            }
          }));

        case 3:
          userOrders = _context6.sent;
          _context6.next = 6;
          return regeneratorRuntime.awrap(User.findOne({
            _id: req.user._id
          }));

        case 6:
          FindAdmin = _context6.sent;
          adminUser = FindAdmin.role;

        case 8:
          if (!req.user) {
            _context6.next = 12;
            break;
          }

          _context6.next = 11;
          return regeneratorRuntime.awrap(WishlistItems.find({
            customerId: req.user._id
          }));

        case 11:
          wishlistItems = _context6.sent;

        case 12:
          // Cart session
          cartSession = req.session.addcart; // Products Fetchs

          _context6.next = 15;
          return regeneratorRuntime.awrap(Products.find({
            category: 'Furniture'
          }));

        case 15:
          furPro = _context6.sent;
          _context6.next = 18;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Sony Bravia 4K 49Inch'
          }));

        case 18:
          FireTV = _context6.sent;
          _context6.next = 21;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Dell Alienware'
          }));

        case 21:
          DellLap = _context6.sent;
          _context6.next = 24;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'ASUS ROG Laptop'
          }));

        case 24:
          AsusLap = _context6.sent;
          res.render('FurnitureProducts', {
            admin: adminUser,
            // cart session
            cart: cartSession,
            // wishlists
            wishlist: wishlistItems,
            // user Orders
            orders: userOrders,
            // Products
            furn: furPro,
            // Fire TV ID
            TV: FireTV,
            // dellap
            dellap: DellLap,
            // asusLap
            asuslap: AsusLap
          });

        case 26:
        case "end":
          return _context6.stop();
      }
    }
  });
};

var GroceriesPage = function GroceriesPage(req, res) {
  var userOrders, adminUser, FindAdmin, wishlistItems, cartSession, groPro, FireTV, DellLap, AsusLap;
  return regeneratorRuntime.async(function GroceriesPage$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          if (!req.user) {
            _context7.next = 8;
            break;
          }

          _context7.next = 3;
          return regeneratorRuntime.awrap(orders.find({
            customerId: req.user._id
          }, null, {
            sort: {
              createdAt: -1
            }
          }));

        case 3:
          userOrders = _context7.sent;
          _context7.next = 6;
          return regeneratorRuntime.awrap(User.findOne({
            _id: req.user._id
          }));

        case 6:
          FindAdmin = _context7.sent;
          adminUser = FindAdmin.role;

        case 8:
          if (!req.user) {
            _context7.next = 12;
            break;
          }

          _context7.next = 11;
          return regeneratorRuntime.awrap(WishlistItems.find({
            customerId: req.user._id
          }));

        case 11:
          wishlistItems = _context7.sent;

        case 12:
          // Cart session
          cartSession = req.session.addcart; // Products Fetchs

          _context7.next = 15;
          return regeneratorRuntime.awrap(Products.find({
            category: 'Groceries'
          }));

        case 15:
          groPro = _context7.sent;
          _context7.next = 18;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Sony Bravia 4K 49Inch'
          }));

        case 18:
          FireTV = _context7.sent;
          _context7.next = 21;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Dell Alienware'
          }));

        case 21:
          DellLap = _context7.sent;
          _context7.next = 24;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'ASUS ROG Laptop'
          }));

        case 24:
          AsusLap = _context7.sent;
          res.render('GroceriesPage', {
            admin: adminUser,
            // cart session
            cart: cartSession,
            // wishlists
            wishlist: wishlistItems,
            // user Orders
            orders: userOrders,
            // Products
            groc: groPro,
            // Fire TV ID
            TV: FireTV,
            // dellap
            dellap: DellLap,
            // asusLap
            asuslap: AsusLap
          });

        case 26:
        case "end":
          return _context7.stop();
      }
    }
  });
};

var GamePage = function GamePage(req, res) {
  var userOrders, adminUser, FindAdmin, wishlistItems, cartSession, gamPro, FireTV, DellLap, AsusLap;
  return regeneratorRuntime.async(function GamePage$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          if (!req.user) {
            _context8.next = 8;
            break;
          }

          _context8.next = 3;
          return regeneratorRuntime.awrap(orders.find({
            customerId: req.user._id
          }, null, {
            sort: {
              createdAt: -1
            }
          }));

        case 3:
          userOrders = _context8.sent;
          _context8.next = 6;
          return regeneratorRuntime.awrap(User.findOne({
            _id: req.user._id
          }));

        case 6:
          FindAdmin = _context8.sent;
          adminUser = FindAdmin.role;

        case 8:
          if (!req.user) {
            _context8.next = 12;
            break;
          }

          _context8.next = 11;
          return regeneratorRuntime.awrap(WishlistItems.find({
            customerId: req.user._id
          }));

        case 11:
          wishlistItems = _context8.sent;

        case 12:
          // Cart session
          cartSession = req.session.addcart; // Products Fetchs

          _context8.next = 15;
          return regeneratorRuntime.awrap(Products.find({
            category: 'Games'
          }));

        case 15:
          gamPro = _context8.sent;
          _context8.next = 18;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Sony Bravia 4K 49Inch'
          }));

        case 18:
          FireTV = _context8.sent;
          _context8.next = 21;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Dell Alienware'
          }));

        case 21:
          DellLap = _context8.sent;
          _context8.next = 24;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'ASUS ROG Laptop'
          }));

        case 24:
          AsusLap = _context8.sent;
          res.render('GameProducts', {
            admin: adminUser,
            // cart session
            cart: cartSession,
            // wishlists
            wishlist: wishlistItems,
            // user Orders
            orders: userOrders,
            // Products
            game: gamPro,
            // Fire TV ID
            TV: FireTV,
            // dellap
            dellap: DellLap,
            // asusLap
            asuslap: AsusLap
          });

        case 26:
        case "end":
          return _context8.stop();
      }
    }
  });
};

var ComputerPage = function ComputerPage(req, res) {
  var userOrders, adminUser, FindAdmin, wishlistItems, cartSession, comPro, FireTV, DellLap, AsusLap;
  return regeneratorRuntime.async(function ComputerPage$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          if (!req.user) {
            _context9.next = 8;
            break;
          }

          _context9.next = 3;
          return regeneratorRuntime.awrap(orders.find({
            customerId: req.user._id
          }, null, {
            sort: {
              createdAt: -1
            }
          }));

        case 3:
          userOrders = _context9.sent;
          _context9.next = 6;
          return regeneratorRuntime.awrap(User.findOne({
            _id: req.user._id
          }));

        case 6:
          FindAdmin = _context9.sent;
          adminUser = FindAdmin.role;

        case 8:
          if (!req.user) {
            _context9.next = 12;
            break;
          }

          _context9.next = 11;
          return regeneratorRuntime.awrap(WishlistItems.find({
            customerId: req.user._id
          }));

        case 11:
          wishlistItems = _context9.sent;

        case 12:
          // Cart session
          cartSession = req.session.addcart; // Products Fetchs

          _context9.next = 15;
          return regeneratorRuntime.awrap(Products.find({
            category: 'Computer'
          }));

        case 15:
          comPro = _context9.sent;
          _context9.next = 18;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Sony Bravia 4K 49Inch'
          }));

        case 18:
          FireTV = _context9.sent;
          _context9.next = 21;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Dell Alienware'
          }));

        case 21:
          DellLap = _context9.sent;
          _context9.next = 24;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'ASUS ROG Laptop'
          }));

        case 24:
          AsusLap = _context9.sent;
          res.render('ComputerProducts', {
            admin: adminUser,
            // cart session
            cart: cartSession,
            // wishlists
            wishlist: wishlistItems,
            // user Orders
            orders: userOrders,
            // Products
            comp: comPro,
            // Fire TV ID
            TV: FireTV,
            // dellap
            dellap: DellLap,
            // asusLap
            asuslap: AsusLap
          });

        case 26:
        case "end":
          return _context9.stop();
      }
    }
  });
};

module.exports = {
  ElectronicPage: ElectronicPage,
  ToysPage: ToysPage,
  MobilePage: MobilePage,
  ClothPage: ClothPage,
  BabyClothPage: BabyClothPage,
  FurniturePage: FurniturePage,
  GroceriesPage: GroceriesPage,
  GamePage: GamePage,
  ComputerPage: ComputerPage
};