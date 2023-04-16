//under progress , not integrated into the main codebase

const jwt = require('jsonwebtoken');

const logfunction = (req, res, next) => {
  console.log('the auth middleware is working');
  next();
};

module.exports = logfunction;
