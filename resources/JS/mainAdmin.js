'use strict';

let preloader = document.querySelector('#preloader');

if (preloader) {
  window.addEventListener('load', () => {
    preloader.style.display = 'none';
  });
}

// Preloader End

let navbar = document.querySelector('.adminHeader');

window.addEventListener('scroll', () => {
  if (window.scrollY >= 105) {
    navbar.style.boxShadow = '0 0 3px rgba(0, 0, 0, 0.3)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

let sidebar = document.querySelector('#adminSidebar');
let sidebarBtn = document.querySelector('#sidebarBtn');
let overlay = document.querySelector('#adminOverlay');
let sidebarDismissBtn = document.querySelector(
  '#adminSidebar .navbar-logo .sidebar-dismiss .logo span'
);
let body = document.querySelector('body');

if (sidebarBtn) {
  sidebarBtn.addEventListener('click', () => {
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

let expand_more = document.querySelectorAll('#expand_more');

if (expand_more) {
  expand_more.forEach((ele) => {
    ele.addEventListener('click', () => {
      ele.classList.toggle('collapse');
    });
  });
}

// userProfile

let adminUserProfile = document.querySelector('#adminUserProfile');

adminUserProfile.addEventListener('click', () => {
  window.location = '/api/adminPage/userprofile';
});

// Product Details

let adminATC = document.querySelectorAll('[data-adminproductid]');

if (adminATC) {
  adminATC.forEach((ele) => {
    ele.addEventListener('click', () => {
      let getID = ele.dataset.adminproductid;
      let StoreProData = localStorage.setItem('GetProDetails', getID);
    });
  });
}

// ================= Cart Added

import axios from 'axios'; // its allowed to make HTTP request to both POST and GET request

let ATC = document.querySelectorAll('[data-addtocart]');

function AddToCart(getId) {
  axios
    .post(`/add-cartpage/`, getId)
    .then((resp) => {})
    .catch((err) => {
      console.log(err);
    });
}

ATC.forEach((ele) => {
  ele.addEventListener('click', () => {
    let getId = JSON.parse(ele.dataset.addtocart);

    let icons = ele.querySelector('.one_btn span');

    icons.innerHTML = `
          <i class="far fa-check"></i>
          Added
          `;

    ele.style.backgroundColor = 'rgb(16, 172, 112)';

    ele.disabled = true;

    AddToCart(getId);

    window.open('/cartpage', '_blank');
  });
});

// Socket and Emit

// socket.on('orderPlaced', (order) => {
//   console.log(order);
// });

// /===============Messages================

let messagesDelete = document.querySelectorAll('[data-deletemsg]');

function deleteMsg(id) {
  axios
    .post('/api/adminPage/messages', {
      msgId: id,
    })
    .then((resp) => {
      console.log(resp);
    })
    .catch((err) => {
      console.log(err);
    });
}

if (messagesDelete) {
  messagesDelete.forEach((ele) => {
    ele.addEventListener('click', () => {
      let getId = JSON.parse(ele.dataset.deletemsg);
      deleteMsg(getId);
      window.location = '/api/adminPage/messages';
    });
  });
}
