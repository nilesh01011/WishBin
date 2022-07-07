"use strict";

var mongoose = require('mongoose');

var WishlistSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  wishlistItems: {
    type: Object,
    required: true
  }
}, {
  timestamps: true
});
var WishListModel = mongoose.model('Wishlistitems', WishlistSchema);
module.exports = WishListModel;