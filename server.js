const express = require('express');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

//initialize express
const app = express();


const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.json({ msg: 'Welcome to my Book Search' }));

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
