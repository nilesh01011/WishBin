const mongoose = require('mongoose');

const WishlistSchema = new mongoose.Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    wishlistItems: {
      type: Object,
      required: true,
    },
  },
  { timestamps: true }
);

const WishListModel = mongoose.model('Wishlistitems', WishlistSchema);

module.exports = WishListModel;
