/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./resources/JS/Home.js ***!
  \******************************/
var swiper = new Swiper('#mySwiper', {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
});
var swiper_Two = new Swiper('#mySwiper2', {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  }
});
var HeaderSwiper = new Swiper('#HeaderSwiper', {
  slidesPerView: 'auto',
  spaceBetween: 20
}); // =========================Swiper JS End================================

var SearchOverlay = document.querySelector('#Container .overlay'),
    Search = document.querySelector('#header .search'),
    SearchIcons = document.querySelector('#header .search i'),
    body = document.querySelector('body');
Search.addEventListener('click', function () {
  SearchOverlay.style.display = 'block';
  body.classList.add('overflow-hidden');
  SearchIcons.style.color = '#101719';
  Search.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
});
SearchOverlay.addEventListener('click', function () {
  SearchOverlay.style.display = 'none';
  body.classList.remove('overflow-hidden');
  SearchIcons.style.color = '#96a0a5';
  Search.style.boxShadow = 'none';
}); // =========================Search Section End============================

var offers_containers = document.querySelector('#offers_containers');
var OfferBtn = document.querySelector('#offers_containers .offers_button');
var offers_contents = document.querySelector('#offers_containers .offers_contents');

if (OfferBtn) {
  OfferBtn.addEventListener('click', function () {
    offers_containers.style.width = 'auto';

    if (offers_contents.classList.contains('active') && offers_containers.classList.contains('is-active')) {
      offers_contents.classList.remove('active');
      offers_containers.classList.remove('is-active');
    } else {
      offers_contents.classList.add('active');
      offers_containers.classList.add('is-active');
    }
  });
} else {
  console.log('Please Login or Registers');
} // =========================Category Products Links============================


var card_game = document.querySelectorAll('#card_games');
card_game.forEach(function (ele) {
  ele.addEventListener('click', function () {
    window.location = './gameproducts';
  });
});
var card_cloths = document.querySelectorAll('#card_cloths');
card_cloths.forEach(function (ele) {
  ele.addEventListener('click', function () {
    window.location = './clothproducts';
  });
});
var card_groceries = document.querySelectorAll('#card_groceries');
card_groceries.forEach(function (ele) {
  ele.addEventListener('click', function () {
    window.location = './groceriesproducts';
  });
});
var card_furniture = document.querySelectorAll('#card_furniture');
card_furniture.forEach(function (ele) {
  ele.addEventListener('click', function () {
    window.location = './furnitureproducts';
  });
});
var card_mobiles = document.querySelectorAll('#card_mobiles');
card_mobiles.forEach(function (ele) {
  ele.addEventListener('click', function () {
    window.location = './mobileproducts';
  });
});
var card_computer = document.querySelectorAll('#card_computer');
card_computer.forEach(function (ele) {
  ele.addEventListener('click', function () {
    window.location = './computerproducts';
  });
});
var card_electronic = document.querySelectorAll('#card_electronic');
card_electronic.forEach(function (ele) {
  ele.addEventListener('click', function () {
    window.location = './electronicproduct';
  });
});
var card_toys = document.querySelectorAll('#card_toys');
card_toys.forEach(function (ele) {
  ele.addEventListener('click', function () {
    window.location = './toysproducts';
  });
});
var card_baby = document.querySelectorAll('#card_baby');
card_baby.forEach(function (ele) {
  ele.addEventListener('click', function () {
    window.location = './babyclothproducts';
  });
});
/******/ })()
;