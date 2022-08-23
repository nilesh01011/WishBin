/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***************************************!*\
  !*** ./resources/JS/dashboardHome.js ***!
  \***************************************/
 // ===================charts===================

var _tooltips;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ctx = document.getElementById('myChart').getContext('2d');
var gradientBg = ctx.createLinearGradient(0, 0, 0, 300);
gradientBg.addColorStop(0, 'rgba(157, 148, 255,0.6)');
gradientBg.addColorStop(0.7, 'rgba(115, 103, 240, .12)');
gradientBg.addColorStop(1, 'rgba(0,0,0,0)');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'line',
  // also try bar or other graph types
  // The data for our dataset
  data: {
    labels: ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    // Information about the dataset
    datasets: [{
      label: '',
      backgroundColor: gradientBg,
      data: [600, 800, 750, 880, 940, 880, 900, 770, 920, 890, 976, 1100],
      pointBorderWidth: 5,
      borderColor: '#7367f0',
      // pointBackgroundColor: '#d0d2d6',
      pointBackgroundColor: 'transparent',
      // pointHoverBackgroundColor: '#7367f0',
      pointBorderColor: 'transparent',
      // pointBorderColor: '#283046',
      pointHoverBorderColor: '#d0d2d6',
      pointHoverBorderWidth: 5,
      pointRadius: 5,
      pointHoverRadius: 7
    }]
  },
  // Configuration options
  defaultFontFamily: 'Inter',
  options: {
    tooltips: (_tooltips = {
      callbacks: {
        labelColor: function labelColor(tooltipItem, chart) {
          return {
            backgroundColor: '#ffffff'
          };
        }
      },
      intersect: false,
      backgroundColor: '#f9f9f9',
      titleFontFamily: 'Inter',
      titleFontColor: '#8F92A1'
    }, _defineProperty(_tooltips, "titleFontColor", '#8F92A1'), _defineProperty(_tooltips, "titleFontSize", 14), _defineProperty(_tooltips, "bodyFontFamily", 'Inter'), _defineProperty(_tooltips, "bodyFontColor", '#171717'), _defineProperty(_tooltips, "bodyFontStyle", 'bold'), _defineProperty(_tooltips, "bodyFontSize", 16), _defineProperty(_tooltips, "multiKeyBackground", 'transparent'), _defineProperty(_tooltips, "displayColors", false), _defineProperty(_tooltips, "xPadding", 30), _defineProperty(_tooltips, "yPadding", 10), _defineProperty(_tooltips, "bodyAlign", 'center'), _defineProperty(_tooltips, "titleAlign", 'center'), _tooltips),
    title: {
      display: false
    },
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          display: false,
          drawTicks: false,
          drawBorder: false
        },
        ticks: {
          padding: 35,
          max: 1200,
          min: 500
        }
      }],
      xAxes: [{
        gridLines: {
          drawBorder: false,
          color: 'rgba(143, 146, 161, .1)',
          zeroLineColor: 'rgba(143, 146, 161, .1)'
        },
        ticks: {
          padding: 20
        }
      }]
    }
  }
}); // =========== chart one end ================

var ctx2 = document.getElementById('Chart2').getContext('2d');
var chart2 = new Chart(ctx2, {
  // The type of chart we want to create
  type: 'bar',
  // also try bar or other graph types
  // The data for our dataset
  data: {
    labels: ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    // Information about the dataset
    datasets: [{
      label: '',
      backgroundColor: 'rgba(157, 148, 255,0.6)',
      hoverBackgroundColor: '#7367f0',
      barThickness: 6,
      maxBarThickness: 8,
      data: [600, 700, 1000, 700, 650, 800, 690, 740, 720, 1120, 876, 900]
    }]
  },
  // Configuration options
  options: {
    borderColor: '#F3F6F8',
    borderWidth: 15,
    backgroundColor: '#F3F6F8',
    tooltips: {
      backgroundColor: '#F3F6F8',
      titleFontColor: '#8F92A1',
      titleFontSize: 12,
      bodyFontColor: '#171717',
      bodyFontStyle: 'bold',
      bodyFontSize: 14,
      multiKeyBackground: 'transparent',
      displayColors: false,
      xPadding: 20,
      yPadding: 5,
      bodyAlign: 'center',
      titleAlign: 'center'
    },
    title: {
      display: false
    },
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          display: false,
          drawTicks: false,
          drawBorder: false
        },
        ticks: {
          padding: 20,
          max: 1200,
          min: 0
        }
      }],
      xAxes: [{
        gridLines: {
          display: false,
          drawBorder: false,
          color: 'rgba(143, 146, 161, .1)',
          zeroLineColor: 'rgba(143, 146, 161, .1)'
        },
        ticks: {
          padding: 0
        }
      }]
    }
  }
}); // =========== chart two end ================

var ctxPieChart1 = document.getElementById('pieChart1').getContext('2d');
var pieChart1 = new Chart(ctxPieChart1, {
  // The type of chart we want to create
  type: 'doughnut',
  // The data for our dataset
  data: {
    labels: ['Games', 'Furniture', 'Groceries', 'Cloths'],
    // Information about the dataset
    datasets: [{
      data: [12, 5, 10, 20],
      backgroundColor: ['#ea5455', '#ff9f43', '#28c76f', '#7367f0'],
      hoverBackgroundColor: ['#ea5455', '#ff9f43', '#28c76f', '#7367f0'],
      hoverBorderColor: 'transparent',
      borderColor: '#283046',
      borderWidth: 5,
      hoverOffset: 10
    }]
  },
  // Configuration options
  options: {
    tooltips: {
      backgroundColor: '#F3F6F8',
      titleFontFamily: 'Inter',
      titleFontColor: '#8F92A1',
      titleFontSize: 12,
      bodyFontFamily: 'Inter',
      bodyFontColor: '#171717',
      bodyFontStyle: 'bold',
      bodyFontSize: 16,
      multiKeyBackground: 'transparent',
      displayColors: false,
      bodyAlign: 'center',
      titleAlign: 'center',
      xPadding: 15,
      yPadding: 12
    },
    title: {
      display: false
    },
    legend: {
      display: false
    },
    scales: {
      yAxes: [{
        gridLines: {
          display: false,
          drawTicks: false,
          drawBorder: false
        },
        ticks: {
          display: false
        }
      }],
      xAxes: [{
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          display: false
        }
      }]
    }
  }
}); // ========= chart polarChart1 end ==========

var orderListContainer = document.querySelector('#loadMoreTr');
var orderListBtn = document.querySelector('#loadMoreTr button');
var currentOrderList = 4;
orderListBtn.addEventListener('click', function () {
  var orderList = document.querySelectorAll('#order_table tbody tr'); // tr table show

  for (var i = currentOrderList; i < currentOrderList + 3; i++) {
    orderList[i].style.display = 'table-row';
  }

  currentOrderList += 4;

  if (currentOrderList > orderList.length) {
    orderListContainer.style.display = 'none';
    orderListBtn.style.display = 'none';
  }
});
/******/ })()
;