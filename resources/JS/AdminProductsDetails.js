let GetProductData = localStorage.getItem('GetProDetails');

import axios from 'axios';

let data = JSON.parse(GetProductData); // Json parse to objects

// =================DOM===================

let productImages = document.querySelector(
    '#adminProducts_details .details_containes .content .images'
  ),
  productTitleDes = document.querySelector(
    '#adminProducts_details .content .product_info span'
  ),
  productStars = document.querySelector(
    '#adminProducts_details .content .star__rating .star'
  ),
  productRatingStars = document.querySelector(
    '#adminProducts_details .content .star__rating .rating span'
  ),
  productOffers = document.querySelector(
    '#adminProducts_details .content .product_info .products_prices .offer span'
  ),
  productPrice = document.querySelector(
    '#adminProducts_details .content .product_info .products_prices .amount .price_amt'
  ),
  productMRP = document.querySelector(
    '#adminProducts_details .content .product_info .mrp_price span .under_line'
  ),
  productAboutListItems = document.querySelector(
    '#adminProducts_details .content .product_info .about_content_items .aboutList'
  ),
  product_Price = document.querySelector(
    '#adminProducts_details .buying_Content .products_buying_sections .amount .price_amt'
  ),
  productStatus = document.querySelector(
    '#adminProducts_details .buying_Content .products_buying_sections .product_status span'
  ),
  productSold_by_us = document.querySelector(
    '#adminProducts_details .buying_Content .products_buying_sections .sold_by_us .SoldBy'
  ),
  productsDescriptions = document.querySelector(
    '#adminProducts_details .descriptions p .des_text span'
  ),
  product_tabel = document.querySelector('#product_tabel');

// ==========================Set data to the DOM========================

if (data) {
  //   Products Images

  if (productImages) {
    productImages.innerHTML = `
      <img src="../../.${data.image}" alt="products_imgs">
      <h6 class="mb-0"> ${data.title} </h6>
      <div class="hr"></div>
    `;
  }
  // Products Descriptions

  if (productTitleDes) {
    productTitleDes.innerHTML = `${data.descriptions}`;
  }

  // Products Start

  if (productStars) {
    productStars.innerHTML = `
    <i class="${
      data.rating >= 1
        ? 'fas fa-star'
        : data.rating >= 0.5
        ? 'fas fa-star-half-alt'
        : 'far fa-star'
    }
    "></i>
  
    <i class="${
      data.rating >= 2
        ? 'fas fa-star'
        : data.rating >= 1.5
        ? 'fas fa-star-half-alt'
        : 'far fa-star'
    }
    "></i>
  
    <i class="${
      data.rating >= 3
        ? 'fas fa-star'
        : data.rating >= 2.5
        ? 'fas fa-star-half-alt'
        : 'far fa-star'
    }
    "></i>
  
    <i class="${
      data.rating >= 4
        ? 'fas fa-star'
        : data.rating >= 3.5
        ? 'fas fa-star-half-alt'
        : 'far fa-star'
    }
    "></i>
  
    <i class="${
      data.rating >= 5
        ? 'fas fa-star'
        : data.rating >= 4.5
        ? 'fas fa-star-half-alt'
        : 'far fa-star'
    }
    "></i>
  `;
  }

  if (productRatingStars) {
    productRatingStars.innerHTML = `${data.rating_rates}`;
  }
  // Products offers
  if (productOffers) {
    productOffers.innerHTML = `${data.offer}`;
  }
  // Products Price

  let price = new Intl.NumberFormat().format(data.price);
  let mrp = new Intl.NumberFormat().format(data.MRP);

  if (productPrice && productMRP && product_Price) {
    productPrice.innerHTML = `${price}`;
    productMRP.innerHTML = `₹${mrp}.00`;
    product_Price.innerHTML = `${price}`;
  }

  // Products Status
  if (productStatus) {
    productStatus.innerHTML = `${data.status}`;
  }

  // Products Sold By whoom

  if (productSold_by_us) {
    productSold_by_us.innerHTML = `${data.category}`;
  }

  if (productAboutListItems) {
    productAboutListItems.innerHTML = `${data.about_details}`;
  }

  if (productsDescriptions) {
    productsDescriptions.innerHTML = `${data.pro_details}`;
  }

  if (product_tabel) {
    product_tabel.innerHTML = `${data.tableDetails}`;
  }
}

let ATC = document.querySelector('#buyOrAtc button.addtoCart');

function proATC(setData) {
  axios
    .post('/add-cartpage', setData)
    .then((resp) => {})
    .catch((err) => {
      console.log(err);
    });
}

ATC.addEventListener('click', () => {
  let setData = data;

  let icons = ATC;

  icons.innerHTML = `
    <i class="far fa-check"></i>
    Added
    `;

  icons.style.transition = '0.3s cubic-bezier(0.46, 0.03, 0.52, 0.96)';

  ATC.style.backgroundColor = 'rgb(16, 172, 112)';

  proATC(setData);

  ATC.disabled = true;

  window.open('/cartpage', '_blank');
});

let BuyNow = document.querySelector('#buyOrAtc .buyNow');

function BuyProducts(setData) {
  axios
    .post('/add-cartpage', setData)
    .then((resp) => {
      console.log(resp);
    })
    .catch((err) => {
      console.log(err);
    });
}

BuyNow.addEventListener('click', () => {
  let BuyPro = data;

  BuyProducts(BuyPro);

  window.open('/paymentpage', '_blank');
});
