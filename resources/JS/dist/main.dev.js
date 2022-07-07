'use strict';

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SideBar_btn = document.querySelector('#left .logo'),
    SideBar = document.querySelector('#SideBar'),
    SideBar_Close = document.querySelector('#SideBar .sidebar_Cross i'),
    Overlay = document.querySelector('#overlay'),
    Logo = document.querySelector('#logo'),
    Start_shop = document.querySelectorAll('#Start_shop'),
    body = document.querySelector('body');
SideBar_btn.addEventListener('click', function () {
  SideBar.style.left = '0';
  body.classList.add('overflow-hidden');
  Overlay.classList.add('active');
});
SideBar_Close.addEventListener('click', function () {
  SideBar.style.left = '-100%';
  body.classList.remove('overflow-hidden');
  Overlay.classList.remove('active');
});
Overlay.addEventListener('click', function () {
  SideBar.style.left = '-100%';
  body.classList.remove('overflow-hidden');
  Overlay.classList.remove('active');
}); // =====================SideBar End=======================

for (var i = 0; i < Start_shop.length; i++) {
  Start_shop[i].addEventListener('click', function () {
    window.location = '/';
  });
}

Logo.addEventListener('click', function () {
  window.location = '/';
}); // ====================Swiper Js End====================

window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
}, false); // ==============Windows Right Click End================
// ===============User Pages Content=====================

var liGet = document.querySelectorAll('#UserPages .user_container .bottom_container ul li');

if (liGet) {
  liGet.forEach(function (set) {
    set.addEventListener('click', function () {
      var active = document.querySelector('#UserPages .user_container .bottom_container ul li.active');

      if (set) {
        set.classList.add('active');
      }

      if (active) {
        active.classList.remove('active');
      }
    });
  });
}

var UpdateDataUserBtn = document.querySelector('#EditUserData');

if (UpdateDataUserBtn) {
  UpdateDataUserBtn.addEventListener('click', function () {
    window.location = './userdataupdate';
  });
}

var cancleUpdateBtn = document.querySelector('#cancleUpdateBtn');
var user = document.querySelector('#user');

if (cancleUpdateBtn) {
  cancleUpdateBtn.addEventListener('click', function () {
    if (user.name) {
      window.location = '/api/adminPage/userprofile';
    } else {
      window.location = '/userprofile';
    }
  });
} // ============================ User Page End ======================================
// =================================================================================


function CloseSideBar() {
  SideBar.style.left = '-100%';
  body.classList.remove('overflow-hidden');
  Overlay.style.visibility = 'hidden';
} // ===================================
// sidebar section


var laptops = document.querySelectorAll('#laptopBtn');
laptops.forEach(function (lap) {
  lap.addEventListener('click', function () {
    var lapContent = document.querySelector('#lapContent');

    if (lap.classList.contains('active')) {
      lap.classList.remove('active');
      lapContent.style.display = 'none';
    } else {
      lap.classList.add('active');
      lapContent.style.display = 'block';
    }
  });
});
var asuslap = document.querySelector('#asuslap');
var dellap = document.querySelector('#dellap');

if (asuslap) {
  asuslap.addEventListener('click', function () {
    var GetAsusLap = asuslap.dataset.productid;
    var getID = localStorage.setItem('GetProDetails', GetAsusLap);
    console.log(getID);
    CloseSideBar();
  }); // Asus Laptop End
}

if (dellap) {
  dellap.addEventListener('click', function () {
    var GetDelLap = dellap.dataset.productid;
    var getID = localStorage.setItem('GetProDetails', GetDelLap);
    console.log(getID);
    CloseSideBar();
  }); // Dell Laptop End
} // ===================================
// sidebar section End
// ======================Pages Links Click in sidebar Redirects=====================


var scrollToSection = document.querySelectorAll('#scrollToSection'),
    scrollToCategory = document.querySelectorAll('#scrollToCategory');
scrollToSection.forEach(function (st) {
  st.addEventListener('click', CloseSideBar, false);
});
scrollToCategory.forEach(function (sc) {
  sc.addEventListener('click', CloseSideBar, false);
});
var AddTVID = document.querySelector('#AddTVID');
AddTVID.addEventListener('click', function () {
  var GetTV = AddTVID.dataset.productid;
  var getID = localStorage.setItem('GetProDetails', GetTV);
  CloseSideBar();
}); // =====================Pages Links Click in sidebar Redirects End===================

var ATP = document.querySelectorAll('[data-productid]');
ATP.forEach(function (ele) {
  ele.addEventListener('click', function () {
    var getID = ele.dataset.productid;
    var StoreProData = localStorage.setItem('GetProDetails', getID);
  });
}); // ============================ Add Wishlist icons =================================

var borderWish = document.querySelectorAll('[data-wishlist]'),
    icons = document.querySelectorAll('#far i.far');
var WishIcons = document.querySelector('#wish_btn');

var _loop = function _loop(_i) {
  borderWish[_i].addEventListener('click', function () {
    var bw = borderWish[_i];
    var GetWishListID = bw.dataset.wishlist;

    if (icons[_i].classList.contains('far')) {
      icons[_i].classList.add('fas');

      icons[_i].classList.remove('far');
    }

    WishIcons.classList.add('active');
  });
};

for (var _i = 0; _i < borderWish.length; _i++) {
  _loop(_i);
} // ===============================================================


var SeeMoreCatCard = document.querySelector('#SeeMore button');

if (SeeMoreCatCard) {
  SeeMoreCatCard.addEventListener('click', function () {
    var loading = SeeMoreCatCard.querySelector('button');

    if (SeeMoreCatCard) {
      setInterval(function () {
        product_json.style.display = 'block';
        SeeMoreCatCard.style.display = 'none';
      }, 2000);
      loading.classList.add('is_active');
    }
  });
} // =========================Search Data===========================


// its allowed to make HTTP request to both POST and GET request
var searchInput = document.querySelector('#searchInput');

function searchDate(key) {
  _axios["default"].post("/searchresult/".concat(key)).then(function (resp) {
    console.log(resp);
  })["catch"](function (err) {
    console.log(err);
  });
}

if (searchInput) {
  searchInput.addEventListener('change', function (event) {
    var key = event.target.value;

    if (!key) {
      console.log('Searching input empty');
    } else {
      searchDate(key);
      window.open('./searchresult', '_blank');
    }
  });
}