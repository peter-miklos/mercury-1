var mongoose = require("mongoose");

var accountSchema = mongoose.Schema({
  _owner: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Client'},
  currency: {type: String, required: true},
  update: {type: Date, default: Date.now}
})

mongoose.model('Account', accountSchema);
