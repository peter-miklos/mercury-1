process.env.NODE_ENV = 'test';

var app = require('../../app');
    Browser = require('zombie');
    http = require('http');
    mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

describe("manage clients", function() {
  var server = http.createServer(app).listen(3000);
  var browser = new Browser({ site: 'http://localhost:3000'});

  before(function() {
    mongoose.model("Client").remove({}, function(err) {
      console.log('collection removed')
    })
  })

  describe("show client list", function() {
    beforeEach(function(done) {
      browser.visit('/clients', done);
    })

    describe("no clients showed", function() {

      it("informs the user if there is no client in database", function() {
        browser.assert.text("body", /No client found/)
      })
    })

    describe("show available clients", function() {

      beforeEach(function(done) {
        mongoose.model("Client").create({first_name: "Test",
                                         last_name: "Client",
                                         national_id_number: "123456789AB",
                                         birth_date: "1979-11-11",
                                         birth_place: "London",
                                         email: "test1@test.com"
        }).then(function() { browser.visit("/clients", done) })
      })

      it("show the list of all clients", function() {
        browser.assert.text("table", /Test Client/)
      })
    })
  })

  describe("add client", function() {
    beforeEach(function(done) {
      browser.visit('/').then(function() {
        browser.clickLink("Add client").then(function() {
          browser
          .fill('first_name', 'New')
          .fill('last_name', 'Client')
          .fill('national_id_number', '987654321CC')
          .fill('birth_date', '1982-03-09')
          .fill('birth_place', 'Budapest, Hungary')
          .fill('email', 'test2@test.com')
          .pressButton("Submit", done);
        })
      })
    })

    it("should be successfull", function() {
      browser.assert.success();
    })

    it("shows the client's name in the client list", function() {
      browser.assert.text("table", /New Client/)
    })

    it("shows the client's date of birth in the client list", function() {
      browser.assert.text("table", /9\/3\/1982/)
    })

    it("shows the client's place of birth in the client list", function() {
      browser.assert.text("table", /Budapest, Hungary/)
    })

  })
})
