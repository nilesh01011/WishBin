"use strict";

var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: {
    type: Object,
    required: true
  },
  name: {
    type: String
  },
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  cardNumber: {
    type: Number
  },
  cardExpNumber: {
    type: String
  },
  cardCVV: {
    type: Number
  },
  paymentType: {
    type: String,
    "default": 'COD'
  },
  status: {
    type: String,
    "default": 'placed'
  },
  totalPrice: {
    type: Number
  }
}, {
  timestamps: true
});
var OrderSchemaModel = mongoose.model('Orderuser', OrderSchema);
module.exports = OrderSchemaModel;