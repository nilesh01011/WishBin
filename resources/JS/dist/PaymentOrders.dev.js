"use strict";

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var popupContainer = document.querySelector('#payment_page_container .popup_container .popup'),
    overlays_payment = document.querySelector('#overlays_payment'),
    payment_Btn = document.querySelector('#payment_Btn'),
    dismiss_btn = document.querySelector('#payment_page_container .popup_container .popup .dismiss-btn .dismiss');
payment_Btn.addEventListener('click', function (e) {
  // e.preventDefault();
  popupContainer.classList.add('active');
  overlays_payment.style.display = 'block';

  _axios["default"].post('/orders').then(function (resp) {
    console.log(resp);
  })["catch"](function (err) {
    console.log(err);
  });
}); // dismiss_btn.addEventListener('click', () => {
//   popupContainer.classList.remove('active');
//   overlays_payment.style.display = 'none';
//   setInterval(anim, 700);
// });
// function anim() {
//   window.location = '/orderpage';
// }