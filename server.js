const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors')
const connectDB = require('./config/db');

//Route files
const books = require('./routes/books');

// Load env vars
dotenv.config({ path: './config/config.env' });

// coonect to db
connectDB();

//initialize express
const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//Mount router
app.use('/api/v1/books', books);

app.get('/', (req, res) => {
  res.status(200).json({ success: true });
});

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.json({ msg: 'Welcome to my Book Search' }));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`.yellow.bold);
});

// Handle unhandled promise rejections

process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
    //close server and exit process
    server.close(()=>process.exit(1))//to exit with a failur add 1
});
