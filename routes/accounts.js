var express = require('express');
    router = express.Router();
    mongoose = require('mongoose');
    account = require('../models/account');
    client = require('../models/client');
    Account = mongoose.model('Account');
    Client = mongoose.model('Client');

router.get('/', function(req, res, next) {
  Account.find({}, function(accErr, accounts) {
    if(accErr) {return handleError(accErr);}
    else {
      Client.find({}, '_id first_name last_name', function(clientErr, clients) {
        if(clientErr) {return handleError(clientErr);}
        else {
          res.render('accounts/index', {title: "List of accounts", accounts: accounts, clients: clients});
        }
      })
    }
  })
});

module.exports = router;
