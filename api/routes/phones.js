var express = require('express');
var router = express.Router();
var asyncHandler = require('express-async-handler');

const phoneModel = require('../models/phones.model');

iosDevices = [
  'iPhone 15 Pro Max', 'iPhone 15 Pro', 'iPhone 15 Plus', 'iPhone 15', 'iPhone 14', 'iPhone 14 Plus', 'iPhone 13', 'iPhone 12', 'iPhone 11'
]; // List of Apple phones
androidDevices = [
  'Samsung Galaxy S23', 'Samsung Galaxy S23 Plus', 'Samsung Galaxy S23 Ultra' ,'Samsung Galaxy S22', 'Samsung Galaxy S23 FE', 'Google Pixel 8 Pro', 'Google Pixel 8', 'Google Pixel 7',
  'Samsung Galaxy A54', 'Samsung Galazy A14', 'Moto G 5G', 'Moto G Pure', 'Moto G Power' 
]; // List of Android phones

/* GET users listing. */
router.get('/getAndroidPhones', asyncHandler(
  async (req, res) => {
    res.status(200).send(androidDevices);
  }
)) 

router.get('/getIosPhones', asyncHandler(
  async (req, res) => {
    res.status(200).send(iosDevices);
  }
)) 

module.exports = router;