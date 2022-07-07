const LocalStrategy = require('passport-local').Strategy;
const User = require('../model/user');

const bcrypt = require('bcrypt');

function init(passport) {
  passport.use(
    new LocalStrategy(
      { usernameField: 'email' },
      async (email, password, done) => {
        // Login
        // check if email id is there or not

        const user = await User.findOne({ email: email });
        if (!user) {
          return done(null, false, { message: 'No user find with this email' });
        }

        // compare the password with data in database
        bcrypt
          .compare(password, user.password)
          .then((match) => {
            if (match) {
              return done(null, user, { message: 'Login Successfull...' });
            }
            return done(null, false, {
              message: 'Invalid username and password',
            });
          })
          .catch((err) => {
            return done(null, false, {
              message: 'Somethings went wrong',
            });
          });
      }
    )
  );

  //  passport Ends

  //  after done to store user ID in session
  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
}

module.exports = init;
