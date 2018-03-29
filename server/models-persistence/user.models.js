var models = require('../models/index');

module.exports.createUser =  function(req, res) {
    models.User.create({
      email: req.body.email
    }).then(function(user) {
      res.json(user)
    })
}