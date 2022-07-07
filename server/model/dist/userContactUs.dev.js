"use strict";

var mongoose = require('mongoose');

var UserMessagesUs = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
var UserMessagesModels = new mongoose.model('Contactmessages', UserMessagesUs);
module.exports = UserMessagesModels;