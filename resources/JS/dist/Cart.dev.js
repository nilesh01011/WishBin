"use strict";

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// its allowed to make HTTP request to both POST and GET request
var addToCartPopup = document.querySelector('#addToCartPopup');

function noty_messages_Toast() {
  addToCartPopup.classList.add('active');
  setTimeout(function () {
    addToCartPopup.classList.remove('active');
  }, 3000);
}

if (addToCartPopup) {
  addToCartPopup.addEventListener('click', function () {
    addToCartPopup.classList.remove('active');
  });
}

var ATC = document.querySelectorAll('.cards button.one_btn');
var count = document.querySelector('#CartBtn .count');
var Cart = document.querySelector('#CartBtn'); // Cart Added

function AddToCart(getId) {
  _axios["default"].post("/add-cartpage/", getId).then(function (resp) {
    count.innerText = resp.data.totalQTY;
    Cart.classList.add('active');
  })["catch"](function (err) {
    console.log(err);
  });
}

ATC.forEach(function (ele) {
  ele.addEventListener('click', function () {
    var getId = JSON.parse(ele.dataset.addtocart);
    var icons = ele.querySelector('.one_btn span');
    icons.innerHTML = "\n          <i class=\"far fa-check\"></i>\n          Added\n          ";
    ele.style.backgroundColor = 'rgb(16, 172, 112)';
    ele.disabled = true;
    AddToCart(getId);
    noty_messages_Toast();
  });
}); // Update Cart Quantity Items

(function () {
  var classname = document.querySelectorAll('#QTY');
  Array.from(classname).forEach(function (element) {
    element.addEventListener('change', function () {
      var id = element.getAttribute('data-updateqty');

      _axios["default"].patch("/update-product-cartpage/".concat(id), {
        qty: this.value,
        ItemsID: id
      }).then(function (response) {
        console.log(response);
        window.location = '/cartpage';
      })["catch"](function (error) {
        console.log(error);
      });
    });
  });
})(); //  Delete Item From Carts


var DeleteItems = document.querySelectorAll('#DeleteFromCart');

function deleteItems(getID) {
  _axios["default"]["delete"]("/remove-cartpage/".concat(getID), {
    ItemsID: getID
  }).then(function (resp) {
    console.log(resp);
    window.location = '/cartpage';
  })["catch"](function (err) {
    console.log(err);
  });
}

DeleteItems.forEach(function (del) {
  del.addEventListener('click', function () {
    var getID = del.dataset.deletecart;
    deleteItems(getID);
  });
}); // ==========================================

var ProcessToBuyBtn = document.querySelector('#ProcessToBuy');
var GoToCartPage = document.querySelector('#ToCartPage');

if (ProcessToBuyBtn) {
  ProcessToBuyBtn.addEventListener('click', function () {
    if (ProcessToBuyBtn.classList.contains('disabled')) {
      ProcessToBuyBtn.disabled = true;
    } else {
      window.location = '/paymentpage';
    }
  });
}

if (GoToCartPage) {
  GoToCartPage.addEventListener('click', function () {
    if (GoToCartPage.classList.contains('disabled')) {
      GoToCartPage.disabled = true;
    } else {
      window.location = '/login';
    }
  });
} // ======================Add to WishList======================


var addWishlist = document.querySelectorAll('.cart_wrapper .products_contents .product_container .product_bottom_part .product_last_part button');

function WishlistAdd(getID) {
  _axios["default"].post('/wishlist-add', getID).then(function (resp) {
    console.log(resp);
  })["catch"](function (err) {
    console.log(err);
  });
}

addWishlist.forEach(function (ele) {
  ele.addEventListener('click', function () {
    var getID = JSON.parse(ele.dataset.wishlistitems);
    WishlistAdd(getID);
    window.location = '/wishlistpage';
  });
});