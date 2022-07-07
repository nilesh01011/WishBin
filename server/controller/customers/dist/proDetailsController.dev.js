"use strict";

var proDetailsPage = function proDetailsPage(req, res) {
  var cartSession;
  return regeneratorRuntime.async(function proDetailsPage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          cartSession = req.session.addcart; //   let getProduct = await Products.findOne({ _id: productsDetails });
          //   let getProduct = JSON.parse(localStorage.getItem('GetProDetails'));
          //   console.log(getProduct);

          res.render('Products_Details', {
            cart: cartSession
          });

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}; // const proDetails = async (req, res) => {
//   let productsDetails = req.body;
//   //   let storeData = localStorage.setItem(
//   //     'GetProDetails',
//   //     JSON.stringify(productsDetails)
//   //   );
//   //   let getProduct = await Products.findOne({ _id: productsDetails });
//   return res.json({ productsDetails });
// };
// module.exports = { proDetails, proDetailsPage };


module.exports = {
  proDetailsPage: proDetailsPage
};