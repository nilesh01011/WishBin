let eye_lock = document.querySelectorAll('#eye_lock'),
  input = document.querySelectorAll('#input input');

for (let i = 0; i < eye_lock.length; i++) {
  eye_lock[i].addEventListener('click', () => {
    if (input[i].type === 'password') {
      input[i].type = 'text';
      eye_lock[i].classList.add('fa-eye');
      eye_lock[i].classList.remove('fa-eye-slash');
      eye_lock[i].style.color = '#000';
    } else {
      input[i].type = 'password';
      eye_lock[i].classList.remove('fa-eye');
      eye_lock[i].classList.add('fa-eye-slash');
      eye_lock[i].style.color = '#fff';
    }
  });
}

let buttons = document.querySelector('#submit');
let forms = document.querySelector('form');
let feild = document.querySelectorAll('form .feild');
let error = document.querySelector('#error');
let password = document.querySelector('#input .password');
let Cpassword = document.querySelector('#input .Cpassword');

let FormStatus = false;

import axios from 'axios';

let userID = document.querySelector('#hidden').value;

function successValidation() {
  axios
    .post('resetpassword?token=', {
      userPassword: password.value,
      userCPassword: Cpassword.value,
      userID: userID,
    })
    .then(function (response) {
      console.log(response);
      window.location = '/login';
    })
    .catch(function (error) {
      console.log(error);
    });
}

function chechValidation() {
  if (!password.value && !Cpassword.value) {
    feild.forEach((ele) => {
      ele.classList.add('error');
    });
  } else if (password.value && !Cpassword.value) {
    feild.forEach((ele) => {
      ele.classList.add('error');
    });

    let CPasswordError = document.querySelector('#cerror');

    CPasswordError.style.display = 'block';

    password.style.borderColor = '#000';

    Cpassword.style.borderColor = '#ea5455';

    let PasswordError = document.querySelector('#perror');

    PasswordError.style.display = 'none';

    Cpassword.addEventListener('keyup', () => {
      Cpassword.style.borderColor = '#000';
      CPasswordError.style.display = 'none';
    });
  } else if (!password.value && Cpassword.value) {
    feild.forEach((ele) => {
      ele.classList.add('error');
    });

    let PasswordError = document.querySelector('#perror');

    PasswordError.style.display = 'block';
    Cpassword.style.borderColor = '#000';

    password.style.borderColor = '#ea5455';

    let CPasswordError = document.querySelector('#cerror');

    CPasswordError.style.display = 'none';

    password.addEventListener('keyup', () => {
      password.style.borderColor = '#000';
      PasswordError.style.display = 'none';
    });
  }

  if (password.value && Cpassword.value) {
    if (password.value == Cpassword.value) {
      // e.currentTarget.submit();

      FormStatus = true;
    } else {
      console.log('its not match', Cpassword.value, password.value);
      feild.forEach((ele) => {
        let span = ele.querySelector('span');
        span.innerText = '!!Please check password not Matching';
        ele.classList.add('error');
        console.log(span);
      });
    }
  }
}

forms.addEventListener('submit', (e) => {
  if (FormStatus == false) {
    e.preventDefault();
    chechValidation();
  }

  if (FormStatus == true) {
    successValidation();
    console.log('else statement', FormStatus);
  }
});
