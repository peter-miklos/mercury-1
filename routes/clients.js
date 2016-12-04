var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var client = require('../models/client');
var Client = mongoose.model('Client')

router.get('/', function(req, res, next) {
  let title = "List of clients"
  Client.find({}, function(err, clients) {
    res.render('clients/index', { title: title, clients: clients });
  })
});

module.exports = router;
