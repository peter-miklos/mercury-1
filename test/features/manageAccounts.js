process.env.NODE_ENV = 'test';

var app = require('../../app');
    Browser = require('zombie');
    http = require('http');
    mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

describe("manage accounts", function() {
  var server = http.createServer(app).listen(3000);
  var browser = new Browser({ site: 'http://localhost:3000'});

  before(function() {
    mongoose.model("Account").remove({}, function(err) {
      console.log('Accounts have been removed');
    });
    mongoose.model("Client").remove({}, function(err) {
      console.log('Clients have been removed');
    }).then(function() {
      mongoose.model("Client").create({first_name: "Test",
                                       last_name: "Client",
                                       national_id_number: "123456789AB",
                                       birth_date: "1979-11-11",
                                       birth_place: "London",
                                       email: "test1@test.com"
      })
    })
  })

  describe("shows list of accounts", function() {
    beforeEach(function(done) {
      browser.visit("/accounts", done);
    })

    describe("no accounts showed", function() {
      it("informs the user that no account found", function() {
        browser.assert.text("body", /No account found/)
      })
    })

    describe("shows available accounts", function() {

      beforeEach(function(done) {
        mongoose.model("Client").findOne({first_name: "Test"}, function(err, client) {
          if (err) {console.log(err)}
          else {
            mongoose.model("Account").create({_owner: client._id,
                                              currency: "GBP"
            }).then(function() {browser.visit("/accounts", done)});
          }
        })
      })

      it("should be successfull", function() {
        browser.assert.success();
      })

      it("shows the list of accounts", function() {
        browser.assert.text("table", /Test Client/);
        browser.assert.text("table", /GBP/)
      })
    })
  })
})