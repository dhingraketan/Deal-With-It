const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({

  name: String,
  phoneNum: Number,
  currentProvider: String | null,
  monthlyBill: Number | null,
  currentData: Number | null,
  numLines: Number,
  transType: String,
  phoneChoice: String | null,
  dataChoice: Number | null,
  homeService: String | null
});

const customerModel = mongoose.model('Customers', customerSchema);

module.exports = customerModel;