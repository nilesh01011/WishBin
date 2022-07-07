"use strict";

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var eye_lock = document.querySelectorAll('#eye_lock'),
    input = document.querySelectorAll('#input input');

var _loop = function _loop(i) {
  eye_lock[i].addEventListener('click', function () {
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
};

for (var i = 0; i < eye_lock.length; i++) {
  _loop(i);
}

var buttons = document.querySelector('#submit');
var forms = document.querySelector('form');
var feild = document.querySelectorAll('form .feild');
var error = document.querySelector('#error');
var password = document.querySelector('#input .password');
var Cpassword = document.querySelector('#input .Cpassword');
var FormStatus = false;
var userID = document.querySelector('#hidden').value;

function successValidation() {
  _axios["default"].post('resetpassword?token=', {
    userPassword: password.value,
    userCPassword: Cpassword.value,
    userID: userID
  }).then(function (response) {
    console.log(response);
    window.location = '/login';
  })["catch"](function (error) {
    console.log(error);
  });
}

function chechValidation() {
  if (!password.value && !Cpassword.value) {
    feild.forEach(function (ele) {
      ele.classList.add('error');
    });
  } else if (password.value && !Cpassword.value) {
    feild.forEach(function (ele) {
      ele.classList.add('error');
    });
    var CPasswordError = document.querySelector('#cerror');
    CPasswordError.style.display = 'block';
    password.style.borderColor = '#000';
    Cpassword.style.borderColor = '#ea5455';
    var PasswordError = document.querySelector('#perror');
    PasswordError.style.display = 'none';
    Cpassword.addEventListener('keyup', function () {
      Cpassword.style.borderColor = '#000';
      CPasswordError.style.display = 'none';
    });
  } else if (!password.value && Cpassword.value) {
    feild.forEach(function (ele) {
      ele.classList.add('error');
    });

    var _PasswordError = document.querySelector('#perror');

    _PasswordError.style.display = 'block';
    Cpassword.style.borderColor = '#000';
    password.style.borderColor = '#ea5455';

    var _CPasswordError = document.querySelector('#cerror');

    _CPasswordError.style.display = 'none';
    password.addEventListener('keyup', function () {
      password.style.borderColor = '#000';
      _PasswordError.style.display = 'none';
    });
  }

  if (password.value && Cpassword.value) {
    if (password.value == Cpassword.value) {
      // e.currentTarget.submit();
      FormStatus = true;
    } else {
      console.log('its not match', Cpassword.value, password.value);
      feild.forEach(function (ele) {
        var span = ele.querySelector('span');
        span.innerText = '!!Please check password not Matching';
        ele.classList.add('error');
        console.log(span);
      });
    }
  }
}

forms.addEventListener('submit', function (e) {
  if (FormStatus == false) {
    e.preventDefault();
    chechValidation();
  }

  if (FormStatus == true) {
    successValidation();
    console.log('else statement', FormStatus);
  }
});