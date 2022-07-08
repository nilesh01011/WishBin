'use strict';

let SideBar_btn = document.querySelector('#left .logo'),
  SideBar = document.querySelector('#SideBar'),
  SideBar_Close = document.querySelector('#SideBar .sidebar_Cross i'),
  Overlay = document.querySelector('#overlay'),
  Logo = document.querySelector('#logo'),
  Start_shop = document.querySelectorAll('#Start_shop'),
  body = document.querySelector('body');

SideBar_btn.addEventListener('click', () => {
  SideBar.style.left = '0';
  body.classList.add('overflow-hidden');
  Overlay.classList.add('active');
});

SideBar_Close.addEventListener('click', () => {
  SideBar.style.left = '-100%';
  body.classList.remove('overflow-hidden');
  Overlay.classList.remove('active');
});

Overlay.addEventListener('click', () => {
  SideBar.style.left = '-100%';
  body.classList.remove('overflow-hidden');
  Overlay.classList.remove('active');
});

// =====================SideBar End=======================

for (let i = 0; i < Start_shop.length; i++) {
  Start_shop[i].addEventListener('click', () => {
    window.location = '/';
  });
}

Logo.addEventListener('click', () => {
  window.location = '/';
});

// ====================Swiper Js End====================

// window.addEventListener(
//   'contextmenu',
//   (e) => {
//     e.preventDefault();
//   },
//   false
// );

// ==============Windows Right Click End================

// ===============User Pages Content=====================
let liGet = document.querySelectorAll(
  '#UserPages .user_container .bottom_container ul li'
);

if (liGet) {
  liGet.forEach((set) => {
    set.addEventListener('click', () => {
      let active = document.querySelector(
        '#UserPages .user_container .bottom_container ul li.active'
      );
      if (set) {
        set.classList.add('active');
      }
      if (active) {
        active.classList.remove('active');
      }
    });
  });
}

let UpdateDataUserBtn = document.querySelector('#EditUserData');

if (UpdateDataUserBtn) {
  UpdateDataUserBtn.addEventListener('click', () => {
    window.location = './userdataupdate';
  });
}

let cancleUpdateBtn = document.querySelector('#cancleUpdateBtn');

const user = document.querySelector('#user');

if (cancleUpdateBtn) {
  cancleUpdateBtn.addEventListener('click', () => {
    if (user.name) {
      window.location = '/api/adminPage/userprofile';
    } else {
      window.location = '/userprofile';
    }
  });
}

// ============================ User Page End ======================================
// =================================================================================

function CloseSideBar() {
  SideBar.style.left = '-100%';
  body.classList.remove('overflow-hidden');
  Overlay.style.visibility = 'hidden';
}

// ===================================

// sidebar section

let laptops = document.querySelectorAll('#laptopBtn');

laptops.forEach((lap) => {
  lap.addEventListener('click', () => {
    let lapContent = document.querySelector('#lapContent');
    if (lap.classList.contains('active')) {
      lap.classList.remove('active');
      lapContent.style.display = 'none';
    } else {
      lap.classList.add('active');
      lapContent.style.display = 'block';
    }
  });
});

let asuslap = document.querySelector('#asuslap');
let dellap = document.querySelector('#dellap');

if (asuslap) {
  asuslap.addEventListener('click', () => {
    let GetAsusLap = asuslap.dataset.productid;

    let getID = localStorage.setItem('GetProDetails', GetAsusLap);

    console.log(getID);

    CloseSideBar();
  });

  // Asus Laptop End
}

if (dellap) {
  dellap.addEventListener('click', () => {
    let GetDelLap = dellap.dataset.productid;

    let getID = localStorage.setItem('GetProDetails', GetDelLap);

    console.log(getID);

    CloseSideBar();
  });

  // Dell Laptop End
}

// ===================================

// sidebar section End

// ======================Pages Links Click in sidebar Redirects=====================

let scrollToSection = document.querySelectorAll('#scrollToSection'),
  scrollToCategory = document.querySelectorAll('#scrollToCategory');

scrollToSection.forEach((st) => {
  st.addEventListener('click', CloseSideBar, false);
});

scrollToCategory.forEach((sc) => {
  sc.addEventListener('click', CloseSideBar, false);
});

let AddTVID = document.querySelector('#AddTVID');

AddTVID.addEventListener('click', () => {
  let GetTV = AddTVID.dataset.productid;
  let getID = localStorage.setItem('GetProDetails', GetTV);
  CloseSideBar();
});

// =====================Pages Links Click in sidebar Redirects End===================

let ATP = document.querySelectorAll('[data-productid]');

ATP.forEach((ele) => {
  ele.addEventListener('click', () => {
    let getID = ele.dataset.productid;

    let StoreProData = localStorage.setItem('GetProDetails', getID);
  });
});

// ============================ Add Wishlist icons =================================

let borderWish = document.querySelectorAll('[data-wishlist]'),
  icons = document.querySelectorAll('#far i.far');
let WishIcons = document.querySelector('#wish_btn');
for (let i = 0; i < borderWish.length; i++) {
  borderWish[i].addEventListener('click', () => {
    let bw = borderWish[i];
    let GetWishListID = bw.dataset.wishlist;

    if (icons[i].classList.contains('far')) {
      icons[i].classList.add('fas');
      icons[i].classList.remove('far');
    }

    WishIcons.classList.add('active');
  });
}

// ===============================================================

import axios from 'axios'; // its allowed to make HTTP request to both POST and GET request

let SeeMoreCatCard = document.querySelector('#SeeMore .buttons');
let seeMoreContainer = document.querySelector('#SeeMore');
let SeeMoreCategory = document.querySelector(
  '#product_json #CardSwiper .card_container'
);

function seemoreCategory_Product() {
  axios
    .post('/seemorecategory_product')
    .then((resp) => {
      let SeemoreCategoryData = resp.data.getCategory;

      SeemoreCategoryData.forEach((ele) => {
        SeeMoreCategory.innerHTML += `
        <div id="${ele.cards_id}" class="card__">
          <div class="cards">
              <div class="card_content">
                  <div class="image">
                      <img src="${ele.image}" loading="lazy" decoding="async"
                          alt="middle_img">
                  </div>
                  <div class="card_view">
                      <div class="card_add_wrapp">
                          <span>
                              <i class="fas fa-chevron-right"></i>
                          </span>
                      </div>
                  </div>
              </div>
              <div class="overlay_typed">
                  <div class="card_name_with_overlay">
                      <h4>
                          ${ele.title}
                      </h4>
                  </div>
              </div>
          </div>
        </div>
        `;
      });

      CategoryLinks();

      // ======Category End
    })
    .catch((err) => {
      console.log(err);
    });
}

function CategoryLinks() {
  let card_game = document.querySelectorAll('#card_games');

  card_game.forEach((ele) => {
    ele.addEventListener('click', () => {
      window.open('./gameproducts', '_blank');
    });
  });

  let card_cloths = document.querySelectorAll('#card_cloths');

  card_cloths.forEach((ele) => {
    ele.addEventListener('click', () => {
      window.open('./clothproducts', '_blank');
    });
  });

  let card_groceries = document.querySelectorAll('#card_groceries');

  card_groceries.forEach((ele) => {
    ele.addEventListener('click', () => {
      window.open('./groceriesproducts', '_blank');
    });
  });

  let card_furniture = document.querySelectorAll('#card_furniture');

  card_furniture.forEach((ele) => {
    ele.addEventListener('click', () => {
      window.open('./furnitureproducts', '_blank');
    });
  });

  let card_mobiles = document.querySelectorAll('#card_mobiles');

  card_mobiles.forEach((ele) => {
    ele.addEventListener('click', () => {
      window.open('./mobileproducts', '_blank');
    });
  });

  let card_computer = document.querySelectorAll('#card_computer');

  card_computer.forEach((ele) => {
    ele.addEventListener('click', () => {
      window.open('./computerproducts', '_blank');
    });
  });

  let card_electronic = document.querySelectorAll('#card_electronic');

  card_electronic.forEach((ele) => {
    ele.addEventListener('click', () => {
      window.open('./electronicproduct', '_blank');
    });
  });

  let card_toys = document.querySelectorAll('#card_toys');

  card_toys.forEach((ele) => {
    ele.addEventListener('click', () => {
      window.open('./toysproducts', '_blank');
    });
  });

  let card_baby = document.querySelectorAll('#card_baby');

  card_baby.forEach((ele) => {
    ele.addEventListener('click', () => {
      window.open('./babyclothproducts', '_blank');
    });
  });
}

// ========================Category Links End=============================

if (SeeMoreCatCard) {
  SeeMoreCatCard.addEventListener('click', () => {
    let loading = SeeMoreCatCard.querySelector('#SeeMore button');

    seemoreCategory_Product();

    if (SeeMoreCatCard) {
      setInterval(() => {
        product_json.style.display = 'block';
        seeMoreContainer.style.display = 'none';
      }, 2000);

      loading.classList.add('is_active');
    }
  });
}

// =========================Search Data===========================

let searchInput = document.querySelector('#searchInput');

function searchDate(key) {
  axios
    .post(`/searchresult/${key}`)
    .then((resp) => {
      console.log(resp);
    })
    .catch((err) => {
      console.log(err);
    });
}

if (searchInput) {
  searchInput.addEventListener('change', (event) => {
    let key = event.target.value;

    if (!key) {
      console.log('Searching input empty');
    } else {
      searchDate(key);
      window.open('./searchresult', '_blank');
    }
  });
}
