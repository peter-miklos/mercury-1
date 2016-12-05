var express = require('express');
    router = express.Router();
    mongoose = require('mongoose');
    client = require('../models/client');
    Client = mongoose.model('Client')

router.get('/', function(req, res, next) {
  Client.find({}, function(err, clients) {
    res.render('clients/index', { title: "List of clients", clients: clients });
  })
});

router.get('/new', function(req, res, next) {
  res.render('clients/new', {title: "Add client"})
})

module.exports = router;
