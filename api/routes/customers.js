var express = require('express');
var router = express.Router();
var asyncHandler = require('express-async-handler');
const { v4: uuidv4 } = require('uuid');


const customerModel = require('../models/customers.model');
const { response } = require('../app');

router.get('/getCustomer/:userID', asyncHandler(
    async (req, res) => {
        const userID = req.params.userID;
        const user = await customerModel.findOne({ userID: userID });
        res.status(200).send(user);
    }
))

router.post('/addCustomer', async (req, res) => {
    const { name, phoneNum, currentProvider, monthlyBill, currentData, numLines, transType, phoneChoice, dataChoice, homeService } = req.body;
    const userID = generateUniqueId(10);

    try {
        const newCustomer = {
            userID,
            name,
            phoneNum,
            currentProvider,
            monthlyBill,
            currentData,
            numLines,
            transType,
            phoneChoice,
            dataChoice,
            homeService
        }

        const response = await customerModel.create(newCustomer);

        console.log('Customer added successfully: ', response);
        res.status(200).send(userID);

    } catch (error) {

        if (error.code === 11000) {
            console.log("Customer already exists");
            return res.status(400).json({ msg: "Customer already exists" });
        }
        throw error;
    }

});



function generateUniqueId(length) {
    const characters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // Including digits and uppercase letters
    const charLength = characters.length;
    let id = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charLength);
        id += characters.charAt(randomIndex);
    }

    return id;

}

module.exports = router;