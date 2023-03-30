require('dotenv').config();
const User = require('../../model/user');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');

const forgetPasswordPage = async (req, res) => {
  res.render('forgetPassword');
};

const forgetPasswordPost = async (req, res) => {
  let userEmail = req.body.forgetemail;

  if (!userEmail) {
    req.flash('emptyemail', '!!Please enter an email id');
    res.redirect('/forgetpassword');
    console.log('error', userEmail);
  }

  const userIsValid = await User.findOne({ email: userEmail });

  // check email value is there or not

  if (userIsValid) {
    const updateRandomString = await User.updateOne(
      { email: userEmail },
      {
        $set: {
          token: userIsValid._id,
        },
      }
    );

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.BUSSINESS_EMAIL,
        pass: process.env.BUSSINESS_PASS,
      },
    });

    let token = userIsValid._id;
    let name = userIsValid.name;

    let details = {
      from: process.env.BUSSINESS_EMAIL,
      to: userIsValid.email,
      subject: 'For Reset Password',
      html:
        ' <div style="height:120px;"> <h4 style="text-transform: capitalize; margin-bottom:8px;"> Hii, ' +
        name +
        ' </h4> <p style="margin-bottom:8px;">Please click here to : </p> <a style=" margin-top:0.5rem; display:flex; width: fit-content; border-radius: 30px; padding: 0.8rem 1.3rem; background: #f16565; color: #fff; font-weight: 700; letter-spacing: 0.4px; text-decoration: none; " href="http://localhost:5000/resetpassword?token=' +
        token +
        '">Reset Your Password</a> </div>',
    };

    transporter.sendMail(details, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log('email send successfull');
      }

      req.flash(
        'successfull',
        '!!Please check your email to reset the password'
      );
      res.redirect('forgetpassword');
    });
  } else {
    req.flash('emailthere', '!!This Email id is not exists');
    req.flash('email', userEmail);
    res.redirect('/forgetpassword');
  }
};

const resetPasswordPage = async (req, res) => {
  const token = req.query.token;
  const tokenData = await User.findOne({ _id: token });

  if (tokenData) {
    if (tokenData.token.length <= 0) {
      res.render('Error');
    } else {
      res.render('resetPassword', { userID: tokenData._id });
    }
  } else {
    res.render('Error');
  }
};

const resetPasswordPost = async (req, res) => {
  try {
    const confirmPassword = req.body.userCPassword;
    const newPassword = req.body.userPassword;
    const userID = req.body.userID;

    const resetpassword = await bcrypt.hash(newPassword, 10);
    const resetConPassword = await bcrypt.hash(confirmPassword, 10);

    const updateData = await User.findByIdAndUpdate(
      { _id: userID },
      {
        $set: {
          password: resetpassword,
          Cpassword: resetConPassword,
          token: '',
        },
      }
    );

    res.redirect('/login');
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  forgetPasswordPage,
  forgetPasswordPost,
  resetPasswordPage,
  resetPasswordPost,
};
