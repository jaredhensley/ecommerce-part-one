var mongoose = require('mongoose');

var Product = mongoose.model('Product', new mongoose.Schema({
  Title: {
    type: String,
    unique: true
  },
  Description: {
    type: String,
    required: true
  },
  Price: {
    type: Number,
    required: true,
    min: 0
  },
  Quantity: {
    type: Number,
    required: true,
    min: 0
  }
}));

module.exports = Product;