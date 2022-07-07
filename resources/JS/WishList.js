import axios from 'axios'; // its allowed to make HTTP request to both POST and GET request

let wishListBtn = document.querySelectorAll('[data-wishlist]');

function WishlistAdd(data) {
  axios
    .post('/wishlist-add', data)
    .then((resp) => {
      console.log(resp);
    })
    .catch((err) => {
      console.log(err);
    });
}

wishListBtn.forEach((ele) => {
  ele.addEventListener('click', () => {
    let getID = JSON.parse(ele.dataset.wishlist);

    ele.disabled = true;

    WishlistAdd(getID);

    window.location = '/wishlistpage';
  });
});

let DeleteFromWishList = document.querySelectorAll('[data-deletewishlist]');

function DeleteWishList(delItems) {
  axios
    .delete(`/wishlist-delete/${delItems}`, {
      WishListItemsID: delItems,
    })
    .then((resp) => {
      console.log(resp);
      window.location = '/wishlistpage';
    })
    .catch((err) => {
      console.log(err);
    });
}

DeleteFromWishList.forEach((del) => {
  del.addEventListener('click', () => {
    let getDelId = del.dataset.deletewishlist;

    DeleteWishList(getDelId);
    noty_messages_Toast();
  });
});

// ==================ATC WishList========================

let ATC = document.querySelectorAll('.wishList_card .Move_bagBtn .wish_btn');

let count = document.querySelector('#CartBtn .count');

let Cart = document.querySelector('#CartBtn');

function proATC(getID, deleteProID) {
  axios
    .post('/add-cartpage', getID)
    .then((resp) => {
      count.innerText = resp.data.totalQTY;

      Cart.classList.add('active');

      window.location = '/cartpage';
    })
    .catch((err) => {
      console.log(err);
    });

  axios
    .delete(`/wishlist-delete/${deleteProID}`, {
      WishListItemsID: deleteProID,
    })
    .then((resp) => {
      console.log(resp);
    })
    .catch((err) => {
      console.log(err);
    });
}

// function Delete_ATC(deleteProID) {
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

ATC.forEach((ele) => {
  ele.addEventListener('click', () => {
    let getID = JSON.parse(ele.dataset.addtocart);

    let deleteProID = getID._id;

    let icons = ele;

    icons.innerHTML = `
      <i class="far fa-check"></i>
      Added
      `;

    icons.style.transition = '0.3s cubic-bezier(0.46, 0.03, 0.52, 0.96)';

    ele.style.backgroundColor = 'rgb(16, 172, 112)';

    proATC(getID, deleteProID);

    ele.disabled = true;
  });
});
