var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

var mongoose = require('mongoose');

const repModel = require('../models/reps.model');

/* GET users listing. */
router.get('/seed', function (req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', async (req, res) => {
  const { username, password, storeNum } = req.body;

  if(password.length < 6){
    return res.status(400).json({ msg: 'Password must be at least 6 characters' });
  }

  const encryptedPassword = await bcrypt.hash(password, 10);

  try{
    const newRep = {
      username,
      password: encryptedPassword,
      storeNum
    }

    const response = await repModel.create(newRep);

    return res.status(200).send(generateToken(response));

  } catch(err){

    if(err.code === 11000){
      return res.status(400).json({ msg: 'Username already exists' });
    }
    throw err;
  }
});

router.post('/login', async (req, res) => {
  const { username, password, storeNum } = req.body;

  if (!username || !password || !storeNum) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  const rep = await repModel.findOne({ username }).lean();

  if (!rep) {
    return res.status(400).json({ msg: 'User does not exist' });
  }

  if (await bcrypt.compare(password, rep.password)) {
    return res.status(200).send(generateToken(rep));

  } else {
    return res.status(400).json({ msg: 'Invalid credentials' });
  }

});


const generateToken = (rep) => {
  const token = jwt.sign({
    username: rep.username
  }, "Secret", { expiresIn: '1h' });

  rep.token = token;
  return rep;
}


module.exports = router;