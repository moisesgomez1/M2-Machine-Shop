const path = require('path');
const express = require('express');

// common practice to store express in an app variable.

const app = express();

const PORT = 3000;

// handles parsing the request body.

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

module.exports = app;
