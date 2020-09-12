const express = require('express');
const logger = require('morgan');
const colors = require('colors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Bring in routes
const transactions = require('./routes/transactions');

// Bring in Config variables
dotenv.config({ path: './config/config.env' });

// Connect Database
connectDB();

const app = express();

// Use body-parser
app.use(express.json());

// Logger
app.use(logger('dev'));

// Use Routes
app.use('/api/v1/transactions', transactions);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on http://localhost:${PORT}`
      .yellow.bold
  );
});
