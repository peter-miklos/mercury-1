var express = require('express');
    router = express.Router();
    mongoose = require('mongoose');
    client = require('../models/client');
    Client = mongoose.model('Client')

router.get('/', function(req, res, next) {
  Client.getAllClientsInSortedList(function(err, clients) {
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
      console.log("Problem occured during db save")
      console.log(err)
    }
    else {
      console.log("New client has been successfully saved in db")
    }
  });
  res.redirect("/clients");
})

router.get('/:id', function(req, res, next) {
  Client.findOne({_id: req.params.id}, function(err, client) {
    if (err) { console.log(err) }
    else {
      let title = `Client: ${client.first_name} ${client.last_name}`
      res.render('clients/show', {title: title, client: client})
    }
  })
})

module.exports = router;
