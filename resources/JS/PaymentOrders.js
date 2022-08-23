import axios from 'axios';

let popupContainer = document.querySelector(
    '#payment_page_container .popup_container .popup'
  ),
  overlays_payment = document.querySelector('#overlays_payment'),
  payment_Btn = document.querySelector('#payment_Btn');

payment_Btn.addEventListener('click', (e) => {
  // e.preventDefault();
  popupContainer.classList.add('active');
  overlays_payment.style.display = 'block';
  axios
    .post('/orders')
    .then((resp) => {
      console.log(resp);
    })
    .catch((err) => {
      console.log(err);
    });
});
