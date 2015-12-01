// required packages
var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongojs = require('mongojs');

// server instance
var app = express();
var db = mongojs('store', ['products'])

// middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

// end points
app.get('/products', function (req, res) {
  db.products.find({}, function (err, results) {
    if (!err) {
      res.status(200).send(results);
    }
  });
});

app.get('/products/:id', function (req, res) {
  db.products.find({
    _id: mongojs.ObjectId(req.params.id)
  }, function (err, results) {
    if (!err) {
      res.status(200).send(results);
    }
  });
});

app.post('/products', function (req, res) {
  console.log(11111, req.body)
  db.products.insert(req.body, function (err, results) {
    if (!err) {
      console.log(22222, results);
      res.status(201).end();
    } else {
      res.status(500).send(err);
    }
  });
});

app.put('/products/:id', function (req, res) {
  db.products.update({
    _id: mongojs.ObjectId(req.params.id)
  }, {
    $set: req.body
  }, function (err, results) {
    if (!err) {
      console.log(results);
      res.status(201).end();
    } else {
      console.log(err);
    }
  });
});

app.delete('/products/:id', function (req, res) {
  db.products.remove({
    _id: mongojs.ObjectId(req.params.id)
  }, function (err, results) {
    if (!err) {
      console.log(results);
      res.status(200).end();
    }
  });
});

app.listen(8080);