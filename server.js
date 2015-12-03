// required packages
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Product = require('./serverAssets/Models/product');
var userCtrl = require('./serverAssets/controllers/userCtrl');
var cartCtrl = require('./serverAssets/controllers/cartCtrl');

// server instance
var app = express();

// middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

// end points
app.get('/products', function (req, res) {
  Product.find(req.query).exec().then(function (products) {
    return res.status(200).json(products);
  });
});

app.get('/products/:id', function (req, res) {
  Product.findOne({
    _id: req.params.id
  }).exec().then(function (products) {
    return res.status(200).json(products);
  });
});

app.post('/products', function (req, res) {
  var product = new Product(req.body);
  product.save().then(function (err, result) {
    if (!err) {
      return res.status(201).end();
    } else {
      console.log(err);
      res.json(err);
    }
  })
});

app.put('/products/:id', function (req, res) {
  Product.update({
    _id: req.params.id
  }, req.body).then(function (err, result) {
    if (!err) {
      return res.status(201).end();
    } else {
      console.log(err);
      res.json(err);
    }
  })
});

app.delete('/products/:id', function (req, res) {
  Product.remove({
    _id: req.params.id
  }).then(function (err, result) {
    if (!err) {
      return res.status(201).end();
    } else {
      console.log(err);
      res.json(err);
    }
  });
});

app.post('/users', userCtrl.addUser);
app.get('/users/:username', userCtrl.getUser);
app.put('/users/:id', userCtrl.updateUser);




app.post('/cart/:id', cartCtrl.addCart);
app.post('/cart/:id', cartCtrl.updateCart);

app.listen(8080);

mongoose.connect('mongodb://localhost/store', function (err) {
  console.log(err);

});