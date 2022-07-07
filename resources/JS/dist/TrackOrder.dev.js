"use strict";

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

try {
  var updateStatus = function updateStatus(order) {
    trackOrders.forEach(function (data) {
      data.classList.remove('step-compeleted');
      data.classList.remove('current-status');
    });
    var stepCompelete = true;
    trackOrders.forEach(function (ele) {
      var getStatus = ele.dataset.status;

      if (stepCompelete) {
        ele.classList.add('step-compeleted');
      }

      if (getStatus === order.status) {
        stepCompelete = false; // timeStatus.innerText = moment(order.updatedAt).format('hh:mm A');

        timeStatus.innerText = (0, _moment["default"])(order.updatedAt).format('llll');

        if (order.status === 'delivered') {
          currentArriving.innerText = (0, _moment["default"])().calendar();
        } else {
          currentArriving.innerText = (0, _moment["default"])(order.createdAt).add(3, 'days').format('MMMM Do YYYY');
        }

        ele.appendChild(timeStatus);

        if (ele.nextElementSibling) {
          ele.nextElementSibling.classList.add('current-status');
        }
      }
    });
  };

  var trackOrders = document.querySelectorAll('[data-status]');
  var hiddenInput = document.querySelector('#hiddenInput');
  var order = hiddenInput ? hiddenInput.value : null;
  order = JSON.parse(order);
  var timeStatus = document.createElement('small');
  timeStatus.className = 'times';
  var currentArriving = document.querySelector('#currentArriving h3 span');
  updateStatus(order); // socket io

  var socket;

  if (io()) {
    socket = io();
  } // Join the rooms by order id


  if (order) {
    socket.emit('join', "order_".concat(order._id));
  } // let adminAreaPath = window.location.pathname;
  // console.log(adminAreaPath);
  // if (adminAreaPath.includes('adminPage')) {
  //   socket.emit('join', 'adminRoom');
  // }
  //  order_ and _idbcbvbbbvebqknqwkdnwqnd like this


  socket.on('orderUpdated', function (data) {
    var updatedOrder = _objectSpread({}, order); // updatedOrder.updatedAt = moment().format();


    updatedOrder.updatedAt = (0, _moment["default"])().format('llll');
    updatedOrder.status = data.status;
    updateStatus(updatedOrder);
  });
} catch (error) {
  console.log(error);
}