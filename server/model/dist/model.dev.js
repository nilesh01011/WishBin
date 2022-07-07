"use strict";

var mongoose = require('mongoose');

var UserRegisters = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  Cpassword: {
    type: String
  },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  address: {
    type: String
  },
  role: {
    type: String,
    "default": 'customer'
  }
}, {
  timestamps: true
});
var UserModels = new mongoose.model('RegistersUsers', UserRegisters);
module.exports = UserModels;