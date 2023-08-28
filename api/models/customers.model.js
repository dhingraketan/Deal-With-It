const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({

  userID: String,
  name: String,
  phoneNum: Number,
  currentProvider: String,
  monthlyBill: Number,
  currentData: Number,
  numLines: Number,
  transType: String,
  phoneChoice: String,
  dataChoice: Number,
  homeService: String
});

const customerModel = mongoose.model('Customers', customerSchema);

module.exports = customerModel;