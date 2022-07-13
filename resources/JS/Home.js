var swiper = new Swiper('#mySwiper', {
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
var swiper_Two = new Swiper('#mySwiper2', {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
});

var HeaderSwiper = new Swiper('#HeaderSwiper', {
  slidesPerView: 'auto',
  spaceBetween: 20,
});

// =========================Swiper JS End================================

let SearchOverlay = document.querySelector('#Container .overlay'),
  Search = document.querySelector('#header .search'),
  SearchIcons = document.querySelector('#header .search i'),
  body = document.querySelector('body');

Search.addEventListener('click', () => {
  SearchOverlay.style.display = 'block';
  body.classList.add('overflow-hidden');
  SearchIcons.style.color = '#101719';
  Search.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
});

SearchOverlay.addEventListener('click', () => {
  SearchOverlay.style.display = 'none';
  body.classList.remove('overflow-hidden');
  SearchIcons.style.color = '#96a0a5';
  Search.style.boxShadow = 'none';
});

// =========================Search Section End============================

let offers_containers = document.querySelector('#offers_containers');
let OfferBtn = document.querySelector('#offers_containers .offers_button');
let offers_contents = document.querySelector(
  '#offers_containers .offers_contents'
);

if (OfferBtn) {
  OfferBtn.addEventListener('click', () => {
    offers_containers.style.width = 'auto';
    if (
      offers_contents.classList.contains('active') &&
      offers_containers.classList.contains('is-active')
    ) {
      offers_contents.classList.remove('active');
      offers_containers.classList.remove('is-active');
    } else {
      offers_contents.classList.add('active');
      offers_containers.classList.add('is-active');
    }
  });
}

// =========================Category Products Links============================

let card_game = document.querySelectorAll('#card_games');

card_game.forEach((ele) => {
  ele.addEventListener('click', () => {
    window.location = './gameproducts';
  });
});

let card_cloths = document.querySelectorAll('#card_cloths');

card_cloths.forEach((ele) => {
  ele.addEventListener('click', () => {
    window.location = './clothproducts';
  });
});

let card_groceries = document.querySelectorAll('#card_groceries');

card_groceries.forEach((ele) => {
  ele.addEventListener('click', () => {
    window.location = './groceriesproducts';
  });
});

let card_furniture = document.querySelectorAll('#card_furniture');

card_furniture.forEach((ele) => {
  ele.addEventListener('click', () => {
    window.location = './furnitureproducts';
  });
});

let card_mobiles = document.querySelectorAll('#card_mobiles');

card_mobiles.forEach((ele) => {
  ele.addEventListener('click', () => {
    window.location = './mobileproducts';
  });
});

let card_computer = document.querySelectorAll('#card_computer');

card_computer.forEach((ele) => {
  ele.addEventListener('click', () => {
    window.location = './computerproducts';
  });
});

let card_electronic = document.querySelectorAll('#card_electronic');

card_electronic.forEach((ele) => {
  ele.addEventListener('click', () => {
    window.location = './electronicproduct';
  });
});

let card_toys = document.querySelectorAll('#card_toys');

card_toys.forEach((ele) => {
  ele.addEventListener('click', () => {
    window.location = './toysproducts';
  });
});

let card_baby = document.querySelectorAll('#card_baby');

card_baby.forEach((ele) => {
  ele.addEventListener('click', () => {
    window.location = './babyclothproducts';
  });
});
