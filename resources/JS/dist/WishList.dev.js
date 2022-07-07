"use strict";

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// its allowed to make HTTP request to both POST and GET request
var wishListBtn = document.querySelectorAll('[data-wishlist]');

function WishlistAdd(data) {
  _axios["default"].post('/wishlist-add', data).then(function (resp) {
    console.log(resp);
  })["catch"](function (err) {
    console.log(err);
  });
}

wishListBtn.forEach(function (ele) {
  ele.addEventListener('click', function () {
    var getID = JSON.parse(ele.dataset.wishlist);
    ele.disabled = true;
    WishlistAdd(getID);
    window.location = '/wishlistpage';
  });
});
var DeleteFromWishList = document.querySelectorAll('[data-deletewishlist]');

function DeleteWishList(delItems) {
  _axios["default"]["delete"]("/wishlist-delete/".concat(delItems), {
    WishListItemsID: delItems
  }).then(function (resp) {
    console.log(resp);
    window.location = '/wishlistpage';
  })["catch"](function (err) {
    console.log(err);
  });
}

DeleteFromWishList.forEach(function (del) {
  del.addEventListener('click', function () {
    var getDelId = del.dataset.deletewishlist;
    DeleteWishList(getDelId);
  });
}); // ==================ATC WishList========================

var ATC = document.querySelectorAll('.wishList_card .Move_bagBtn .wish_btn');
var count = document.querySelector('#CartBtn .count');
var Cart = document.querySelector('#CartBtn');

function proATC(getID, deleteProID) {
  _axios["default"].post('/add-cartpage', getID).then(function (resp) {
    count.innerText = resp.data.totalQTY;
    Cart.classList.add('active');
    window.location = '/cartpage';
  })["catch"](function (err) {
    console.log(err);
  });

  _axios["default"]["delete"]("/wishlist-delete/".concat(deleteProID), {
    WishListItemsID: deleteProID
  }).then(function (resp) {
    console.log(resp);
  })["catch"](function (err) {
    console.log(err);
  });
} // function Delete_ATC(deleteProID) {
//   axios
//     .delete(`/wishlist-delete/${deleteProID}`, {
//       WishListItemsID: deleteProID,
//     })
//     .then((resp) => {
//       console.log(resp);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }


ATC.forEach(function (ele) {
  ele.addEventListener('click', function () {
    var getID = JSON.parse(ele.dataset.addtocart);
    var deleteProID = getID._id;
    var icons = ele;
    icons.innerHTML = "\n      <i class=\"far fa-check\"></i>\n      Added\n      ";
    icons.style.transition = '0.3s cubic-bezier(0.46, 0.03, 0.52, 0.96)';
    ele.style.backgroundColor = 'rgb(16, 172, 112)';
    proATC(getID, deleteProID);
    ele.disabled = true;
  });
});