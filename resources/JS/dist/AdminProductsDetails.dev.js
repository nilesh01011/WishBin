"use strict";

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var GetProductData = localStorage.getItem('GetProDetails');
var data = JSON.parse(GetProductData); // Json parse to objects
// =================DOM===================

var productImages = document.querySelector('#adminProducts_details .details_containes .content .images'),
    productTitleDes = document.querySelector('#adminProducts_details .content .product_info span'),
    productStars = document.querySelector('#adminProducts_details .content .star__rating .star'),
    productRatingStars = document.querySelector('#adminProducts_details .content .star__rating .rating span'),
    productOffers = document.querySelector('#adminProducts_details .content .product_info .products_prices .offer span'),
    productPrice = document.querySelector('#adminProducts_details .content .product_info .products_prices .amount .price_amt'),
    productMRP = document.querySelector('#adminProducts_details .content .product_info .mrp_price span .under_line'),
    productAboutListItems = document.querySelector('#adminProducts_details .content .product_info .about_content_items .aboutList'),
    product_Price = document.querySelector('#adminProducts_details .buying_Content .products_buying_sections .amount .price_amt'),
    productStatus = document.querySelector('#adminProducts_details .buying_Content .products_buying_sections .product_status span'),
    productSold_by_us = document.querySelector('#adminProducts_details .buying_Content .products_buying_sections .sold_by_us .SoldBy'),
    productsDescriptions = document.querySelector('#adminProducts_details .descriptions p .des_text span'),
    product_tabel = document.querySelector('#product_tabel'); // ==========================Set data to the DOM========================

if (data) {
  //   Products Images
  if (productImages) {
    productImages.innerHTML = "\n      <img src=\"../../.".concat(data.image, "\" alt=\"products_imgs\">\n      <h6 class=\"mb-0\"> ").concat(data.title, " </h6>\n      <div class=\"hr\"></div>\n    ");
  } // Products Descriptions


  if (productTitleDes) {
    productTitleDes.innerHTML = "".concat(data.descriptions);
  } // Products Start


  if (productStars) {
    productStars.innerHTML = "\n    <i class=\"".concat(data.rating >= 1 ? 'fas fa-star' : data.rating >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star', "\n    \"></i>\n  \n    <i class=\"").concat(data.rating >= 2 ? 'fas fa-star' : data.rating >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star', "\n    \"></i>\n  \n    <i class=\"").concat(data.rating >= 3 ? 'fas fa-star' : data.rating >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star', "\n    \"></i>\n  \n    <i class=\"").concat(data.rating >= 4 ? 'fas fa-star' : data.rating >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star', "\n    \"></i>\n  \n    <i class=\"").concat(data.rating >= 5 ? 'fas fa-star' : data.rating >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star', "\n    \"></i>\n  ");
  }

  if (productRatingStars) {
    productRatingStars.innerHTML = "".concat(data.rating_rates);
  } // Products offers


  if (productOffers) {
    productOffers.innerHTML = "".concat(data.offer);
  } // Products Price


  var price = new Intl.NumberFormat().format(data.price);
  var mrp = new Intl.NumberFormat().format(data.MRP);

  if (productPrice && productMRP && product_Price) {
    productPrice.innerHTML = "".concat(price);
    productMRP.innerHTML = "\u20B9".concat(mrp, ".00");
    product_Price.innerHTML = "".concat(price);
  } // Products Status


  if (productStatus) {
    productStatus.innerHTML = "".concat(data.status);
  } // Products Sold By whoom


  if (productSold_by_us) {
    productSold_by_us.innerHTML = "".concat(data.category);
  }

  if (productAboutListItems) {
    productAboutListItems.innerHTML = "".concat(data.about_details);
  }

  if (productsDescriptions) {
    productsDescriptions.innerHTML = "".concat(data.pro_details);
  }

  if (product_tabel) {
    product_tabel.innerHTML = "".concat(data.tableDetails);
  }
}

var ATC = document.querySelector('#buyOrAtc button.addtoCart');

function proATC(setData) {
  _axios["default"].post('/add-cartpage', setData).then(function (resp) {})["catch"](function (err) {
    console.log(err);
  });
}

ATC.addEventListener('click', function () {
  var setData = data;
  var icons = ATC;
  icons.innerHTML = "\n    <i class=\"far fa-check\"></i>\n    Added\n    ";
  icons.style.transition = '0.3s cubic-bezier(0.46, 0.03, 0.52, 0.96)';
  ATC.style.backgroundColor = 'rgb(16, 172, 112)';
  proATC(setData);
  ATC.disabled = true;
  window.open('/cartpage', '_blank');
});
var BuyNow = document.querySelector('#buyOrAtc .buyNow');

function BuyProducts(setData) {
  _axios["default"].post('/add-cartpage', setData).then(function (resp) {
    console.log(resp);
  })["catch"](function (err) {
    console.log(err);
  });
}

BuyNow.addEventListener('click', function () {
  var BuyPro = data;
  BuyProducts(BuyPro);
  window.open('/paymentpage', '_blank');
});