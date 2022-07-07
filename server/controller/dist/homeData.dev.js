"use strict";

var CategoryPro = require('../model/categoryProduct');

var Products = require('../model/productsModel');

var SeeMoreModel = require('../model/seeMoreModel');

var User = require('../model/user');

var WishlistItems = require('../model/wishlistModel');

var orders = require('../model/ordersModel');

var homeIndex = function homeIndex(req, res) {
  var userOrders, adminUser, FindAdmin, wishlistItems, MainCategory, productToys, productElec, productElecTwo, productElecThree, productFur, productCloth, productClothTwo, productBabyCloth, productGroc, productGame, productCompu, productMobile, cartSession, FireTV, DellLap, AsusLap, SeeMoreCategory, seemoreProToys, seemoreProElec, seemoreProCloth, seemoreProBabyCloth, seemoreProGro, seemoreProMobile, seemoreProComp, seemoreProMobileTwo, seemoreProFur, seemoreProCompTwo, seemoreProGroTwo, seemoreProCompThree, GetvivoZ6;
  return regeneratorRuntime.async(function homeIndex$(_context) {
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
          return regeneratorRuntime.awrap(CategoryPro.find());

        case 14:
          MainCategory = _context.sent;
          _context.next = 17;
          return regeneratorRuntime.awrap(Products.findOne({
            category: 'Toys'
          }));

        case 17:
          productToys = _context.sent;
          _context.next = 20;
          return regeneratorRuntime.awrap(Products.findOne({
            category: 'Electronics'
          }));

        case 20:
          productElec = _context.sent;
          _context.next = 23;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Razer PS5 Headphone'
          }));

        case 23:
          productElecTwo = _context.sent;
          _context.next = 26;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Sony Bravia 4K 49Inch'
          }));

        case 26:
          productElecThree = _context.sent;
          _context.next = 29;
          return regeneratorRuntime.awrap(Products.findOne({
            category: 'Furniture'
          }));

        case 29:
          productFur = _context.sent;
          _context.next = 32;
          return regeneratorRuntime.awrap(Products.findOne({
            category: 'Cloths'
          }));

        case 32:
          productCloth = _context.sent;
          _context.next = 35;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Woolen Sweater'
          }));

        case 35:
          productClothTwo = _context.sent;
          _context.next = 38;
          return regeneratorRuntime.awrap(Products.findOne({
            category: 'BabyCloths'
          }));

        case 38:
          productBabyCloth = _context.sent;
          _context.next = 41;
          return regeneratorRuntime.awrap(Products.findOne({
            category: 'Groceries'
          }));

        case 41:
          productGroc = _context.sent;
          _context.next = 44;
          return regeneratorRuntime.awrap(Products.findOne({
            category: 'Games'
          }));

        case 44:
          productGame = _context.sent;
          _context.next = 47;
          return regeneratorRuntime.awrap(Products.findOne({
            category: 'Computer'
          }));

        case 47:
          productCompu = _context.sent;
          _context.next = 50;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Samsung Galaxy S21'
          }));

        case 50:
          productMobile = _context.sent;
          // Carta sessions
          cartSession = req.session.addcart; // Fire TV ID

          _context.next = 54;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Sony Bravia 4K 49Inch'
          }));

        case 54:
          FireTV = _context.sent;
          _context.next = 57;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Dell Alienware'
          }));

        case 57:
          DellLap = _context.sent;
          _context.next = 60;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'ASUS ROG Laptop'
          }));

        case 60:
          AsusLap = _context.sent;
          _context.next = 63;
          return regeneratorRuntime.awrap(SeeMoreModel.find());

        case 63:
          SeeMoreCategory = _context.sent;
          _context.next = 66;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Pikachu SoftToy'
          }));

        case 66:
          seemoreProToys = _context.sent;
          _context.next = 69;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Washing Machine'
          }));

        case 69:
          seemoreProElec = _context.sent;
          _context.next = 72;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Hooded Jacket'
          }));

        case 72:
          seemoreProCloth = _context.sent;
          _context.next = 75;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Regular Kurta'
          }));

        case 75:
          seemoreProBabyCloth = _context.sent;
          _context.next = 78;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Jeera (Cumin) 200g'
          }));

        case 78:
          seemoreProGro = _context.sent;
          _context.next = 81;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'OnePlus 9R'
          }));

        case 81:
          seemoreProMobile = _context.sent;
          _context.next = 84;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Intel i9 CPU'
          }));

        case 84:
          seemoreProComp = _context.sent;
          _context.next = 87;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'IPhone 13'
          }));

        case 87:
          seemoreProMobileTwo = _context.sent;
          _context.next = 90;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Sofa Side Table'
          }));

        case 90:
          seemoreProFur = _context.sent;
          _context.next = 93;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Logitech Mouse'
          }));

        case 93:
          seemoreProCompTwo = _context.sent;
          _context.next = 96;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Aashirvaad Atta'
          }));

        case 96:
          seemoreProGroTwo = _context.sent;
          _context.next = 99;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Dell Alienware'
          }));

        case 99:
          seemoreProCompThree = _context.sent;
          _context.next = 102;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Vivo Z6 5G'
          }));

        case 102:
          GetvivoZ6 = _context.sent;
          return _context.abrupt("return", res.render('index', {
            admin: adminUser,
            // admin find
            orders: userOrders,
            // user Orders End
            wishlist: wishlistItems,
            // wishlist Items End
            cart: cartSession,
            // Cart sessions End
            cate: MainCategory,
            // Category End
            pto: productToys,
            pel: productElec,
            pfur: productFur,
            pclo: productCloth,
            pbc: productBabyCloth,
            pco: productCompu,
            pgo: productGroc,
            pga: productGame,
            pmo: productMobile,
            pcloTwo: productClothTwo,
            pelTwo: productElecTwo,
            pelThree: productElecThree,
            // Fire TV ID
            TV: FireTV,
            // dellap
            dellap: DellLap,
            // asusLap
            asuslap: AsusLap,
            // SeeMore
            seeCat: SeeMoreCategory,
            // Category End
            seemoretoy: seemoreProToys,
            seemoreelc: seemoreProElec,
            seemorecloth: seemoreProCloth,
            seemorebabycloth: seemoreProBabyCloth,
            seemoremob: seemoreProMobile,
            seemorecom: seemoreProComp,
            seemoregro: seemoreProGro,
            seemoremobtwo: seemoreProMobileTwo,
            seemorefur: seemoreProFur,
            seemorecomtwo: seemoreProCompTwo,
            seemoregrotwo: seemoreProGroTwo,
            seemorecomthree: seemoreProCompThree,
            // SeeMore Sections End
            vivoZ6: GetvivoZ6
          }));

        case 104:
        case "end":
          return _context.stop();
      }
    }
  });
};

var wishlistAddController = function wishlistAddController(req, res) {
  var userID, wishlist_Items, MatchWishListItem, wishlist;
  return regeneratorRuntime.async(function wishlistAddController$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          userID = req.user._id;
          wishlist_Items = req.body;
          _context2.next = 4;
          return regeneratorRuntime.awrap(WishlistItems.findOne({
            wishlistItems: wishlist_Items
          }));

        case 4:
          MatchWishListItem = _context2.sent;

          if (!MatchWishListItem) {
            _context2.next = 9;
            break;
          }

          console.log(MatchWishListItem.wishlistItems._id);
          _context2.next = 13;
          break;

        case 9:
          _context2.next = 11;
          return regeneratorRuntime.awrap(new WishlistItems({
            customerId: userID,
            wishlistItems: wishlist_Items
          }));

        case 11:
          wishlist = _context2.sent;
          wishlist.save().then(function (result) {// result
          })["catch"](function (err) {
            console.log(err);
          });

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var SearchPageController = function SearchPageController(req, res) {
  var searchDataItems, searchDataValue, userOrders, adminUser, FindAdmin, wishlistItems, cartSession, FireTV, DellLap, AsusLap, productToys;
  return regeneratorRuntime.async(function SearchPageController$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          searchDataItems = req.session.searchData.items.getDate;
          searchDataValue = req.session.searchData.searchValue.keys; // User orders

          if (!req.user) {
            _context3.next = 10;
            break;
          }

          _context3.next = 5;
          return regeneratorRuntime.awrap(orders.find({
            customerId: req.user._id
          }, null, {
            sort: {
              createdAt: -1
            }
          }));

        case 5:
          userOrders = _context3.sent;
          _context3.next = 8;
          return regeneratorRuntime.awrap(User.findOne({
            _id: req.user._id
          }));

        case 8:
          FindAdmin = _context3.sent;
          adminUser = FindAdmin.role;

        case 10:
          if (!req.user) {
            _context3.next = 14;
            break;
          }

          _context3.next = 13;
          return regeneratorRuntime.awrap(WishlistItems.find({
            customerId: req.user._id
          }));

        case 13:
          wishlistItems = _context3.sent;

        case 14:
          // CartSession
          cartSession = req.session.addcart; // Fire TV ID

          _context3.next = 17;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Sony Bravia 4K 49Inch'
          }));

        case 17:
          FireTV = _context3.sent;
          _context3.next = 20;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'Dell Alienware'
          }));

        case 20:
          DellLap = _context3.sent;
          _context3.next = 23;
          return regeneratorRuntime.awrap(Products.findOne({
            title: 'ASUS ROG Laptop'
          }));

        case 23:
          AsusLap = _context3.sent;
          _context3.next = 26;
          return regeneratorRuntime.awrap(Products.findOne({
            category: 'Toys'
          }));

        case 26:
          productToys = _context3.sent;
          res.render('SearchResult', {
            admin: adminUser,
            // cart session
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
            asuslap: AsusLap,
            // ====================
            pto: productToys,
            // ========================
            search: searchDataValue,
            searchItems: searchDataItems
          });

        case 28:
        case "end":
          return _context3.stop();
      }
    }
  });
};

var SearchDateController = function SearchDateController(req, res) {
  var keys, getDate, searchData;
  return regeneratorRuntime.async(function SearchDateController$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          keys = req.params.key;
          _context4.next = 3;
          return regeneratorRuntime.awrap(Products.find({
            $text: {
              $search: keys
            }
          }));

        case 3:
          getDate = _context4.sent;

          if (!req.session.searchData) {
            req.session.searchData = {
              items: {},
              searchValue: {}
            };
          }

          searchData = req.session.searchData;

          if (!searchData) {
            searchData.items = {
              getDate: getDate
            };
            searchData.searchValue = {
              keys: keys
            };
          } else {
            searchData.items = {
              getDate: getDate
            };
            searchData.searchValue = {
              keys: keys
            };
          }

          res.send({
            session: searchData
          });

        case 8:
        case "end":
          return _context4.stop();
      }
    }
  });
};

module.exports = {
  homeIndex: homeIndex,
  wishlistAddController: wishlistAddController,
  SearchDateController: SearchDateController,
  SearchPageController: SearchPageController
};