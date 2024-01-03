const path = require('path');
const express = require('express');
const cors = require('cors');

// common practice to store express in an app variable.

const app = express();

const apiRouter = require('./routes/api.js');

const PORT = 3000;

// handles parsing the request body.
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// statically serve everything in the build folder on the route '/build'
app.use('/build', express.static(path.join(__dirname, '../build')));

// handles being able to access the uploads folder publicly
app.use('/uploads', express.static('uploads'));

// coming from the client containing data in the request obj.
app.use('/api', apiRouter);

app.get('/*', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

module.exports = app;
