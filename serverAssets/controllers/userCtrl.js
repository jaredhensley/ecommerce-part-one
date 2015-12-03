var User = require('../Models/User');


module.exports = {
  addUser: function (req, res) {
    var user = new User(req.body);
    user.save().then(function (results) {
      console.log('result from saving user', results);
      res.status(201).end();
    });

  },

  updateUser: function (req, res) {
    var user = User.update({
      _id: req.params.id
    }, req.body, function (err, results) {
      console.log('user update result', results);
      res.status(200).send(results);
    });
  },

  getUser: function (req, res) {
    User.findOne({
      username: req.params.username
    }, function (err, user) {
      if (err) {
        res.status(500).send(err);
      } else {
        console.log(user);
        res.status(200).send(user);
      }

    });

  },
/*loginUser: function (req, res) {

}*/

}