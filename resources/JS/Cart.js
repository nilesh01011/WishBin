import axios from 'axios'; // its allowed to make HTTP request to both POST and GET request

let addToCartPopup = document.querySelector('#addToCartPopup');

function noty_messages_Toast() {
  addToCartPopup.classList.add('active');

  setTimeout(() => {
    addToCartPopup.classList.remove('active');
  }, 3000);
}

if (addToCartPopup) {
  addToCartPopup.addEventListener('click', () => {
    addToCartPopup.classList.remove('active');
  });
}

let ATC = document.querySelectorAll('.cards button.one_btn');
let count = document.querySelector('#CartBtn .count');
let Cart = document.querySelector('#CartBtn');

// Cart Added

function AddToCart(getId) {
  axios
    .post(`/add-cartpage/`, getId)
    .then((resp) => {
      count.innerText = resp.data.totalQTY;

      Cart.classList.add('active');
    })
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

    noty_messages_Toast();
  });
});

// Update Cart Quantity Items

(function () {
  const classname = document.querySelectorAll('#QTY');

  Array.from(classname).forEach(function (element) {
    element.addEventListener('change', function () {
      const id = element.getAttribute('data-updateqty');

      axios
        .patch(`/update-product-cartpage/${id}`, {
          qty: this.value,
          ItemsID: id,
        })
        .then(function (response) {
          console.log(response);
          window.location = '/cartpage';
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  });
})();

//  Delete Item From Carts

let DeleteItems = document.querySelectorAll('#DeleteFromCart');

function deleteItems(getID) {
  axios
    .delete(`/remove-cartpage/${getID}`, {
      ItemsID: getID,
    })
    .then((resp) => {
      console.log(resp);
      window.location = '/cartpage';
    })
    .catch((err) => {
      console.log(err);
    });
}

DeleteItems.forEach((del) => {
  del.addEventListener('click', () => {
    let getID = del.dataset.deletecart;

    deleteItems(getID);
  });
});

// ==========================================

let ProcessToBuyBtn = document.querySelector('#ProcessToBuy');
let GoToCartPage = document.querySelector('#ToCartPage');

if (ProcessToBuyBtn) {
  ProcessToBuyBtn.addEventListener('click', () => {
    if (ProcessToBuyBtn.classList.contains('disabled')) {
      ProcessToBuyBtn.disabled = true;
    } else {
      window.location = '/paymentpage';
    }
  });
}

if (GoToCartPage) {
  GoToCartPage.addEventListener('click', () => {
    if (GoToCartPage.classList.contains('disabled')) {
      GoToCartPage.disabled = true;
    } else {
      window.location = '/login';
    }
  });
}

// ======================Add to WishList======================

let addWishlist = document.querySelectorAll(
  '.cart_wrapper .products_contents .product_container .product_bottom_part .product_last_part button'
);

function WishlistAdd(getID) {
  axios
    .post('/wishlist-add', getID)
    .then((resp) => {
      console.log(resp);
    })
    .catch((err) => {
      console.log(err);
    });
}

addWishlist.forEach((ele) => {
  ele.addEventListener('click', () => {
    let getID = JSON.parse(ele.dataset.wishlistitems);

    WishlistAdd(getID);
    window.location = '/wishlistpage';
  });
});
