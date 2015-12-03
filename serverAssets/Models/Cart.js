var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  products: [{
    type: String,
    ref: 'Product'
  }],
  total: {
    type: Number,
    required: true
  }

});


module.exports = mongoose.model('Cart', schema);