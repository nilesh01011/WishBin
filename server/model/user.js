const mongoose = require('mongoose');

const UserRegisters = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    Cpassword: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    role: {
      type: String,
      default: 'customer',
    },
    token: {
      type: String,
      default: '',
    },
    expireIn: Date,
  },
  { timestamps: true }
);

const UserModels = new mongoose.model('RegistersUsers', UserRegisters);

module.exports = UserModels;
