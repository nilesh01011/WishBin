const mongoose = require('mongoose');

const SeeMore = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  cards_id: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const SeeMoreModel = mongoose.model('SeeMoreCategory', SeeMore);

module.exports = SeeMoreModel;
