process.env.NODE_ENV = 'test';

var app = require('../../app');
var Browser = require('zombie');
var http = require('http');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

describe("manage clients", function() {
  server = http.createServer(app).listen(3000);
  browser = new Browser({ site: 'http://localhost:3000'});

  before(function() {
    mongoose.model("Client").remove({}, function(err) {
      console.log('collection removed')
    }).then(function() {
      mongoose.model("Client").create({name: "Test User",
                                       national_ID_number: "123456789AB",
                                       birth_date: "1979-11-11",
                                       birth_place: "London"
      })
    })
  })

  describe("show client list", function() {
    beforeEach(function(done) {
      browser.visit('/clients', done);
    })

    describe("no clients showed", function() {
      beforeEach(function() {
        mongoose.model("Client").remove({}, function(err) {
          console.log("collection removed");
        })
      })

      xit("informs the user if there is no client in database", function() {
        browser.assert.text("body", /No client found/)
      })
    })

    it("show the list of all clients", function() {
      browser.assert.text("table", /Test User/)
    })
  })
})
