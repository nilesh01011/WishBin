"use strict";

var viewProductDetails = document.querySelectorAll('[data-productid]');
viewProductDetails.forEach(function (ele) {
  ele.addEventListener('click', function () {
    console.log(ele);
  });
});