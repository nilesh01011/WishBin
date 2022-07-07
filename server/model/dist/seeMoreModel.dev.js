"use strict";

var mongoose = require('mongoose');

var SeeMore = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  cards_id: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});
var SeeMoreModel = mongoose.model('SeeMoreCategory', SeeMore);
module.exports = SeeMoreModel;