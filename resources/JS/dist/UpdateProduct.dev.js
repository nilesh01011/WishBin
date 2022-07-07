"use strict";

var GetProductData = localStorage.getItem('UpdateProducr'); // import axios from 'axios';

var data = JSON.parse(GetProductData); // Json parse to objects

var productTitle = document.querySelector('#adminContainer form .productTitle input');
var productsDescriptions = document.querySelector('#adminContainer form .productDescription textarea');
var productCategory = document.querySelector('#adminContainer form .productCategory .select_option');
var productPrice = document.querySelector('#adminContainer form .productCategory .productPrice input');
var productMrp = document.querySelector('#adminContainer form .productCategory .productMRP input');
var productOffer = document.querySelector('#adminContainer form .productCategory .productOffer input');
var productTableDetails = document.querySelector('#adminContainer form .productTableDetails .productTableDetailsContainer'); // =======================Variable assign End=====================

productTitle.value = "".concat(data.title);
productsDescriptions.innerText = "".concat(data.descriptions);
productCategory.innerHTML = "\n\n<select class=\"form-select\" id=\"categoryProductList\">\n<option ".concat(data.category === 'Toys' ? 'selected' : '', " >Toys</option>\n<option ").concat(data.category === 'Electronics' ? 'selected' : '', " >Electronics</option>\n<option ").concat(data.category === 'Cloths' ? 'selected' : '', " >Cloths</option>\n<option ").concat(data.category === 'Mobiles' ? 'selected' : '', " >Mobiles</option>\n<option ").concat(data.category === 'Furniture' ? 'selected' : '', " >Furniture</option>\n<option ").concat(data.category === 'Groceries' ? 'selected' : '', " >Groceries</option>\n<option ").concat(data.category === 'BabyCloths' ? 'selected' : '', " >BabyCloths</option>\n<option ").concat(data.category === 'Games' ? 'selected' : '', " >Games</option>\n<option ").concat(data.category === 'Computer' ? 'selected' : '', " >Computer</option>\n</select>\n");
productPrice.value = "\u20B9 ".concat(new Intl.NumberFormat().format(data.price));
productMrp.value = "\u20B9 ".concat(new Intl.NumberFormat().format(data.MRP));
productOffer.value = "".concat(data.offer);
productTableDetails.innerHTML += "\n<div class=\"col-md-5 col-sm-6 col-12 mb-md-0 mb-3\">\n<input type=\"text\" class=\"form-control\" placeholder=\"Table head\">\n</div>\n<div class=\"col-md-5 col-sm-6 col-12 mb-md-0 mb-3\">\n<input type=\"text\" class=\"form-control\" placeholder=\"Table description\">\n</div>\n<div class=\"col-md-2 col-12 d-flex gap-2 px-md-0\">\n<button type=\"button\" id=\"AddTableRow\" onclick=\"addTableRow()\">\n    <span class=\"material-icons\">add</span>\n</button>\n<button type=\"button\" class=\"disabled\" disabled id=\"DeleteTableRow\">\n    <span class=\"material-icons\">delete_outline</span>\n</button>\n</div>\n";
var aboutDetails = data.tableDetails;
var liSplite = aboutDetails.split('');
console.log(liSplite); // liSplite.forEach((ele) => {
//   let removeCloseLi = ele.split(' ');
//   console.log(removeCloseLi[1]);
// });