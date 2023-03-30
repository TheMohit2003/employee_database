const express = require('express');
const app = express();
require('dotenv').config();
const db = require('./config/db');
const { errorHandler } = require('./middlewares/errorHandler');
const port = process.env.PORT || 3000;
//database connection initiated
db();
// Middleware to parse JSON data
app.use(express.json());
// Middleware to parse URL-encoded data
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./routes/employee'));
// app.use('/auth', require('./routes/auth'));    //under progress

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
