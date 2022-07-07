import axios from 'axios'; // its allowed to make HTTP request to both POST and GET request

function cancleorderproduct(getItems) {
  axios
    .delete(`/orderpageproductdelete/${getItems}`, {
      deleteOrder: getItems,
    })
    .then((resp) => {
      console.log(resp);
    })
    .catch((err) => {
      console.log(err);
    });
}

let CancleOrder = document.querySelectorAll('[data-cancleorderproduct]');

CancleOrder.forEach((ele) => {
  ele.addEventListener('click', () => {
    let getItems = JSON.parse(ele.dataset.cancleorderproduct);

    cancleorderproduct(getItems);
  });
});

// Order Tracking

function trackOrder(orderID) {
  axios
    .post('/ordertrack', orderID)
    .then((resp) => {
      console.log(resp);
    })
    .catch((err) => {
      console.log(err);
    });
}

let orderTrack = document.querySelectorAll('[data-ordertrack]');

orderTrack.forEach((ele) => {
  ele.addEventListener('click', () => {
    let getTrackOrderId = JSON.parse(ele.dataset.ordertrack);
    trackOrder(getTrackOrderId);
  });
});
