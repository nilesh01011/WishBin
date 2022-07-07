"use strict";

var mongoose = require('mongoose');

var Products = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
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
  descriptions: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  MRP: {
    type: Number,
    required: true
  },
  rating: {
    type: String,
    required: true
  },
  rating_rates: {
    type: String,
    required: true
  },
  offer: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  soldBy: {
    type: String,
    required: true
  },
  QTY: {
    type: Number,
    required: true
  },
  about_details: {
    type: String,
    required: true
  },
  pro_details: {
    type: String,
    required: true
  },
  tableDetails: {
    type: String,
    required: true
  }
});
var ProductModel = mongoose.model('Products', Products);
module.exports = ProductModel;