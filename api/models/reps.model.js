const mongoose = require('mongoose');

const repSchema = mongoose.Schema({

  username: String,
  password: String,
  storeNum: Number,
});

const repModel = mongoose.model('Reps', repSchema);

module.exports = repModel;