// controller
const User = require('../../model/user');

const bcrypt = require('bcrypt');
const passport = require('passport');

const UserRegis = async (req, res) => {
  const { email, password, Cpassword, name, phone, address } = req.body;

  if (!email || !password || !Cpassword || !name || !phone || !address) {
    req.flash('error', 'All fields are required');
    req.flash('email', email);
    req.flash('password', password);
    req.flash('Cpassword', Cpassword);
    req.flash('name', name);
    req.flash('phone', phone);
    req.flash('address', address);
    return res.render('RegisterPage');
  }

  // check email is exists in our DB

  User.exists({ email: email }, (err, result) => {
    if (result) {
      req.flash('error', 'Email is already exists');
      req.flash('email', email);
      req.flash('password', password);
      req.flash('Cpassword', Cpassword);
      req.flash('name', name);
      req.flash('phone', phone);
      req.flash('address', address);
      return res.render('RegisterPage');
    }
  });

  // Hashing Password

  const hashedPassword = await bcrypt.hash(password, 10);

  //  Create A user Data Details

  const user = new User({
    name: name,
    email: email,
    password: hashedPassword,
    Cpassword: hashedPassword,
    phone: phone,
    address: address,
  });

  // when registers successfull...

  user
    .save()
    .then((user) => {
      return res.redirect('/login');
    })
    .catch((err) => {
      req.flash('error', 'Something went wrong!');
      return res.render('RegisterPage');
    });
};

const UserLogin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    req.flash('error', 'All fields are required');
    req.flash('email', email);

    return res.redirect('/login');
  }

  // passport.authenticate methods

  // for info parameter get the error messages
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      req.flash('error', info.message);

      return next(err);
    }

    // if user not found

    if (!user) {
      req.flash('error', info.message);

      return res.redirect('/login');
    }

    // successfull user login

    req.logIn(user, (err) => {
      if (err) {
        req.flash('error', info.message);
        return next(err);
      }

      return res.redirect('/userprofile');
    });
  })(req, res, next);
};

const UserLogout = async (req, res, next) => {
  req.logout(); // passport logout function

  return res.redirect('/login');
};

module.exports = {
  UserRegis,
  UserLogin,
  UserLogout,
};
