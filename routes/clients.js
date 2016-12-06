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
  res.render('clients/new', {title: "Add client"});
});

router.post('/create', function(req, res, next) {
  Client.create({first_name: req.body.first_name,
                 last_name: req.body.last_name,
                 national_id_number: req.body.national_id_number,
                 birth_date: req.body.birth_date,
                 birth_place: req.body.birth_place,
                 email: req.body.email ? req.body.email : ""
  }, function(err, client) {
    if (err) {
      console.log(err)
      console.log("Problem occured during db save")
    }
    else {
      console.log("New client has been successfully saved in db")
    }
  });
  res.redirect("/clients");
})

module.exports = router;
