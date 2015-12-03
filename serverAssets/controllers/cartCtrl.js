var Cart = require('../Models/Cart.js');
var updateUser = require('./userCtrl').updateUser;

module.exports = {


  addCart: function (req, res) {
    console.log(req.body);
    var cart = new Cart(req.body.cart);
    cart.save().then(function (results) {
      req.body = {
        cart: results._id
      };
      updateUse(req, res);
    });
  },

  updateCart: function (req, res) {
    Cart.update({
      _id: req.params.id
    }, req.body, function (err, results) {
      console.log('results from card update', results);
    });
  }
}