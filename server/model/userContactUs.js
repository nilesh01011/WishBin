const mongoose = require('mongoose');

const UserMessagesUs = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const UserMessagesModels = new mongoose.model(
  'Contactmessages',
  UserMessagesUs
);

module.exports = UserMessagesModels;
