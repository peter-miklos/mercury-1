var mongoose = require("mongoose");

var clientSchema = mongoose.Schema({
  name: {type: String, required: true},
  national_ID_number: {type: String, required: true},
  birth_date: {type: Date, required: true},
  birth_place: {type: String, required: true},
  update: {type: Date, default: Date.now}
})

mongoose.model('Client', clientSchema);
