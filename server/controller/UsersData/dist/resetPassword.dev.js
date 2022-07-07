"use strict";

require('dotenv').config();

var User = require('../../model/user');

var nodemailer = require('nodemailer');

var bcrypt = require('bcrypt');

var forgetPasswordPage = function forgetPasswordPage(req, res) {
  return regeneratorRuntime.async(function forgetPasswordPage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          res.render('forgetPassword');

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
};

var forgetPasswordPost = function forgetPasswordPost(req, res) {
  var userEmail, userIsValid, updateRandomString, transporter, token, name, details;
  return regeneratorRuntime.async(function forgetPasswordPost$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          userEmail = req.body.forgetemail;

          if (!userEmail) {
            req.flash('emptyemail', '!!Please enter an email id');
            res.redirect('/forgetpassword');
            console.log('error', userEmail);
          }

          _context2.next = 4;
          return regeneratorRuntime.awrap(User.findOne({
            email: userEmail
          }));

        case 4:
          userIsValid = _context2.sent;

          if (!userIsValid) {
            _context2.next = 16;
            break;
          }

          _context2.next = 8;
          return regeneratorRuntime.awrap(User.updateOne({
            email: userEmail
          }, {
            $set: {
              token: userIsValid._id
            }
          }));

        case 8:
          updateRandomString = _context2.sent;
          transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.BUSSINESS_EMAIL,
              pass: process.env.BUSSINESS_PASS
            }
          });
          token = userIsValid._id;
          name = userIsValid.name;
          details = {
            from: process.env.BUSSINESS_EMAIL,
            to: userIsValid.email,
            subject: 'For Reset Password',
            html: ' <div style="height:120px;"> <h4 style="text-transform: capitalize; margin-bottom:8px;"> Hii, ' + name + ' </h4> <p style="margin-bottom:8px;">Please click here to : </p> <a style=" margin-top:0.5rem; display:flex; width: fit-content; border-radius: 30px; padding: 0.8rem 1.3rem; background: #f16565; color: #fff; font-weight: 700; letter-spacing: 0.4px; text-decoration: none; " href="http://localhost:5000/resetpassword?token=' + token + '">Reset Your Password</a> </div>'
          };
          transporter.sendMail(details, function (err, data) {
            if (err) {
              console.log(err);
            } else {
              console.log('email send successfull');
            }

            req.flash('successfull', '!!Please check your email to reset the password');
            res.redirect('forgetpassword');
          });
          _context2.next = 19;
          break;

        case 16:
          req.flash('emailthere', '!!This Email id is not exists');
          req.flash('email', userEmail);
          res.redirect('/forgetpassword');

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  });
};

var resetPasswordPage = function resetPasswordPage(req, res) {
  var token, tokenData;
  return regeneratorRuntime.async(function resetPasswordPage$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          token = req.query.token;
          _context3.next = 3;
          return regeneratorRuntime.awrap(User.findOne({
            _id: token
          }));

        case 3:
          tokenData = _context3.sent;

          if (tokenData) {
            if (tokenData.token.length <= 0) {
              res.render('Error');
            } else {
              res.render('resetPassword', {
                userID: tokenData._id
              });
            }
          } else {
            res.render('Error');
          }

        case 5:
        case "end":
          return _context3.stop();
      }
    }
  });
};

var resetPasswordPost = function resetPasswordPost(req, res) {
  var confirmPassword, newPassword, userID, resetpassword, resetConPassword, updateData;
  return regeneratorRuntime.async(function resetPasswordPost$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          confirmPassword = req.body.userCPassword;
          newPassword = req.body.userPassword;
          userID = req.body.userID;
          _context4.next = 6;
          return regeneratorRuntime.awrap(bcrypt.hash(newPassword, 10));

        case 6:
          resetpassword = _context4.sent;
          _context4.next = 9;
          return regeneratorRuntime.awrap(bcrypt.hash(confirmPassword, 10));

        case 9:
          resetConPassword = _context4.sent;
          _context4.next = 12;
          return regeneratorRuntime.awrap(User.findByIdAndUpdate({
            _id: userID
          }, {
            $set: {
              password: resetpassword,
              Cpassword: resetConPassword,
              token: ''
            }
          }));

        case 12:
          updateData = _context4.sent;
          res.redirect('/login');
          _context4.next = 19;
          break;

        case 16:
          _context4.prev = 16;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);

        case 19:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 16]]);
};

module.exports = {
  forgetPasswordPage: forgetPasswordPage,
  forgetPasswordPost: forgetPasswordPost,
  resetPasswordPage: resetPasswordPage,
  resetPasswordPost: resetPasswordPost
};