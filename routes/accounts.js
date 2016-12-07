var express = require('express');
    router = express.Router();
    mongoose = require('mongoose');
    account = require('../models/account');
    Account = mongoose.model('Account');

router.get('/', function(req, res, next) {
  Account.find({}, function(err, accounts) {
    if(err) {return handleError(err);}
    else {
      res.render('accounts/index', {title: "List of accounts", accounts: accounts});
    }
  })
});

module.exports = router;
