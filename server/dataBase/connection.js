require('dotenv').config();

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    mongoose
      .connect(process.env.DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log('Connect Successfull...'))
      .catch((err) => console.log(err));
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
