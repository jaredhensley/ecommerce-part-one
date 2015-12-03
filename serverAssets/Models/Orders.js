var mongoose = require('mongoose');
var product = require('./product.js')

var OrderSchema = new mongoose.Schema({

  user: {
    type: String,
    ref: 'User'
  },
  products: [{
    product.Schema
  }],
  createdAt: {
    type: Date,
    required: true
  }

});

var exports = mongoose.model('Order', OrderSchema);