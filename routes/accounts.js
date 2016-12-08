var express = require('express');
    router = express.Router();
    mongoose = require('mongoose');
    account = require('../models/account');
    client = require('../models/client');
    Account = mongoose.model('Account');
    Client = mongoose.model('Client');

router.get('/', function(req, res, next) {
  Account.find({}).populate('_owner').exec(function(err, accounts) {
    if(err) {return handleError(err);}
    else {res.render('accounts/index', {title: "List of accounts", accounts: accounts});}
  })
});

router.get('/new', function(req, res, next) {
  Client.getAllClientsInSortedList(function(err, clients) {
    if (err) {return handleError(err)}
    else { res.render('accounts/new', {title: "Add an account", clients: clients}); }
  })
})

router.post("/create", function(req, res, next) {
  Account.create({currency: req.body.ccySelection,
                  _owner: req.body.clientSelection
  }, function(accErr, account) {
    if (accErr) {console.log(accErr)}
    else {
      console.log("New account has been successfully created")
      res.redirect('/accounts');
    }
  })
})

module.exports = router;
