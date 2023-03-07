const express = require('express');
const cors = require('cors');
const api = require('./api');
const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Server is running...Test',
  });
});

app.use('/api', api);

module.exports = app;
