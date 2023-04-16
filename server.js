const express = require('express');
const app = express();
const dotenv = require('dotenv');
const db = require('./config/db');
const cors = require('cors');
const errorHandler = require('./middlewares/errorHandler');
const employeeRouter = require('./routes/employee');

dotenv.config();
const port = process.env.PORT || 3000;

// Connect to database
db();

// Enable CORS
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// Parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', employeeRouter);

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
