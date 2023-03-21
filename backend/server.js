const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./config/db');

db();

app.use('/', require('./routes/employee'));

app.listen(3000, () => {
  console.log('the server is running');
});
