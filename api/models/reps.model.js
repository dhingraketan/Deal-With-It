const mongoose = require('mongoose');

const repSchema = mongoose.Schema({

  name: String,
  userID: String,
  password: String,
});

const repModel = mongoose.model('Reps', repSchema);

module.exports = repModel;