var mongoose = require("mongoose");

var clientSchema = mongoose.Schema({
  first_name: {type: String, required: true},
  last_name: {type: String, required: true},
  national_id_number: {type: String, required: true},
  birth_date: {type: Date, required: true},
  birth_place: {type: String, required: true},
  email: {type: String, required: false},
  update: {type: Date, default: Date.now}
})

mongoose.model('Client', clientSchema);
