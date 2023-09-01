const mongoose = require('mongoose');

const repSchema = mongoose.Schema({

  Username: String,
  password: String,
  storeNum: Number,
});

const repModel = mongoose.model('Reps', repSchema);

module.exports = repModel;