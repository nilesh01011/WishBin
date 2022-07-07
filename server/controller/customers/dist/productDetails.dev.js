"use strict";

var proDetailsController = function proDetailsController(req, res) {
  var cartSession, productsDetails;
  return regeneratorRuntime.async(function proDetailsController$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          cartSession = req.session.addcart;
          productsDetails = req.body;
          return _context.abrupt("return", res.render('Products_Details', {
            cart: cartSession,
            proDet: productsDetails
          }));

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
};

module.exports = proDetailsController;