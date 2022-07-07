const mongoose = require('mongoose');

const UserProfileImage = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  name: {
    type: String,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
});

const UserProfileImageModel = new mongoose.model(
  'Userprofileimage',
  UserProfileImage
);

module.exports = UserProfileImageModel;
