const mongoose = require('mongoose');

const phoneSchema = mongoose.Schema({

  brand: String,
  model: String,
  storage: Number,
  color: String
});

const phoneModel = mongoose.model('Phones', phoneSchema);

module.exports = phoneModel;