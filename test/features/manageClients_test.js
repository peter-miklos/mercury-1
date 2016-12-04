process.env.NODE_ENV = 'test';
var app = require('../../app');
var Browser = require('zombie');
var mongoose = require('mongoose');

Browser.localhost('localhost', 3000);

describe("manage clients", function() {
  var browser = new Browser();

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
    beforeEach(function() {
      browser.visit('/clients');
    })

    it("informs the user if there is no client in database", function() {
      mongoose.model("Client").remove({}, function(err) {
        console.log("collection removed")
      }).then(function() {
        browser.assert.text("body", /No client found/)
      })
    })

    it("show the list of all clients", function() {
      browser.assert.text("h1", /List of clients/)
    })
  })
})
