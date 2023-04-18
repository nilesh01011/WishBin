import moment from 'moment';

try {
  let trackOrders = document.querySelectorAll('[data-status]');

  let hiddenInput = document.querySelector('#hiddenInput');
  let order = hiddenInput ? hiddenInput.value : null;
  order = JSON.parse(order);

  let timeStatus = document.createElement('small');

  timeStatus.className = 'times';

  // let currentArriving = document.querySelector('#currentArriving h3 span');

  function updateStatus(order) {
    trackOrders.forEach((data) => {
      data.classList.remove('step-compeleted');
      data.classList.remove('current-status');
    });
    let stepCompelete = true;

    trackOrders.forEach((ele) => {
      let getStatus = ele.dataset.status;

      if (stepCompelete) {
        ele.classList.add('step-compeleted');
      }

      if (getStatus === order.status) {
        stepCompelete = false;

        // timeStatus.innerText = moment(order.updatedAt).format('hh:mm A');
        timeStatus.innerText = moment(order.updatedAt).format('llll');

        // if (order.status === 'delivered') {
        //   currentArriving.innerText = moment().calendar();
        // } else {
        //   currentArriving.innerText = moment(order.createdAt)
        //     .add(3, 'days')
        //     .format('MMMM Do YYYY');
        // }

        ele.appendChild(timeStatus);

        if (ele.nextElementSibling) {
          ele.nextElementSibling.classList.add('current-status');
        }
      }
    });
  }

  updateStatus(order);

  // socket io

  let socket;

  if (io) {
    socket = io();
  }

  // Join the rooms by order id

  if (order) {
    socket.emit('join', `order_${order._id}`);
  }

  // let adminAreaPath = window.location.pathname;

  // console.log(adminAreaPath);

  // if (adminAreaPath.includes('adminPage')) {
  //   socket.emit('join', 'adminRoom');
  // }

  //  order_ and _idbcbvbbbvebqknqwkdnwqnd like this

  socket.on('orderUpdated', (data) => {
    const updatedOrder = { ...order };

    // updatedOrder.updatedAt = moment().format();
    updatedOrder.updatedAt = moment().format('llll');
    updatedOrder.status = data.status;

    updateStatus(updatedOrder);
  });
} catch (error) {
  console.log(error);
}
