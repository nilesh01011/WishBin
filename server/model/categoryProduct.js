const mongoose = require('mongoose');

const CategoryPro = new mongoose.Schema({
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

const CategoryModel = mongoose.model('Categoryproducts', CategoryPro);

module.exports = CategoryModel;
