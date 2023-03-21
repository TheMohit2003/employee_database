const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./config/db');

//database connection initiated
db();
// Middleware to parse JSON data
app.use(express.json());
// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./routes/employee'));

app.listen(3000, () => {
  console.log('the server is running');
});
