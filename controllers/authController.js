const expressAsyncHandler = require('express-async-handler');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

//@description
//@route
//@access

const register = expressAsyncHandler(async (req, res) => {
  res.send('register route');
});

//@description
//@route
//@access

const login = expressAsyncHandler(async (req, res) => {
  res.send('login  route');
});

module.exports = { login, register };
