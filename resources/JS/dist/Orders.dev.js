"use strict";

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// its allowed to make HTTP request to both POST and GET request
function cancleorderproduct(getItems) {
  _axios["default"]["delete"]("/orderpageproductdelete/".concat(getItems), {
    deleteOrder: getItems
  }).then(function (resp) {
    console.log(resp);
  })["catch"](function (err) {
    console.log(err);
  });
}

var CancleOrder = document.querySelectorAll('[data-cancleorderproduct]');
CancleOrder.forEach(function (ele) {
  ele.addEventListener('click', function () {
    var getItems = JSON.parse(ele.dataset.cancleorderproduct);
    cancleorderproduct(getItems);
  });
}); // Order Tracking

function trackOrder(orderID) {
  _axios["default"].post('/ordertrack', orderID).then(function (resp) {
    console.log(resp);
  })["catch"](function (err) {
    console.log(err);
  });
}

var orderTrack = document.querySelectorAll('[data-ordertrack]');
orderTrack.forEach(function (ele) {
  ele.addEventListener('click', function () {
    var getTrackOrderId = JSON.parse(ele.dataset.ordertrack);
    trackOrder(getTrackOrderId);
  });
});