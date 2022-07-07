"use strict";

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sidebar = document.querySelector('#adminSidebar');
var sidebarBtn = document.querySelector('#sidebarBtn');
var overlay = document.querySelector('#adminOverlay');
var sidebarDismissBtn = document.querySelector('#adminSidebar .navbar-logo .sidebar-dismiss .logo span');
var sidebarLinks = document.querySelectorAll('#adminSidebar .sidebar-nav ul li a.navLink');
var body = document.querySelector('body');

if (sidebarBtn) {
  sidebarBtn.addEventListener('click', function () {
    sidebar.classList.add('active');
    overlay.classList.add('active');
    body.classList.add('sidebarActive');
  });
}

if (overlay) {
  overlay.addEventListener('click', sidebarDismiss, false);
}

if (sidebarDismissBtn) {
  sidebarDismissBtn.addEventListener('click', sidebarDismiss, false);
}

function sidebarDismiss() {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
  body.classList.remove('sidebarActive');
}

if (sidebarLinks) {
  sidebarLinks.forEach(function (ele) {
    ele.addEventListener('click', function () {
      var active = document.querySelector('#adminSidebar .sidebar-nav ul li a.active');

      if (active) {
        active.classList.remove('active');
      }

      if (ele) {
        ele.classList.add('active');
      }
    });
  });
}

var expand_more = document.querySelectorAll('#expand_more');

if (expand_more) {
  expand_more.forEach(function (ele) {
    ele.addEventListener('click', function () {
      ele.classList.toggle('collapse');
    });
  });
} // userProfile


var adminUserProfile = document.querySelector('#adminUserProfile');
adminUserProfile.addEventListener('click', function () {
  window.location = '/api/adminPage/userprofile';
}); // Product Details

var adminATC = document.querySelectorAll('[data-adminproductid]');

if (adminATC) {
  adminATC.forEach(function (ele) {
    ele.addEventListener('click', function () {
      var getID = ele.dataset.adminproductid;
      var StoreProData = localStorage.setItem('GetProDetails', getID);
    });
  });
} // ================= Cart Added


// its allowed to make HTTP request to both POST and GET request
var ATC = document.querySelectorAll('[data-addtocart]');

function AddToCart(getId) {
  _axios["default"].post("/add-cartpage/", getId).then(function (resp) {})["catch"](function (err) {
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
    window.open('/cartpage', '_blank');
  });
}); // Socket and Emit
// socket.on('orderPlaced', (order) => {
//   console.log(order);
// });
// /===============Messages================

var messagesDelete = document.querySelectorAll('[data-deletemsg]');

function deleteMsg(id) {
  _axios["default"].post('/api/adminPage/messages', {
    msgId: id
  }).then(function (resp) {
    console.log(resp);
  })["catch"](function (err) {
    console.log(err);
  });
}

if (messagesDelete) {
  messagesDelete.forEach(function (ele) {
    ele.addEventListener('click', function () {
      var getId = JSON.parse(ele.dataset.deletemsg);
      deleteMsg(getId);
      window.location = '/api/adminPage/messages';
    });
  });
}