"use strict";

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

console.log('hello');
// its allowed to make HTTP request to both POST and GET request
var btn = document.querySelectorAll('#tabs .btn');
btn.forEach(function (ele) {
  ele.addEventListener('click', function () {
    console.log(ele);
  });
});