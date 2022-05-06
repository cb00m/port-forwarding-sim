
const express = require('express');
const app = express();


const cors = require('cors');

// Avoid CORS issues
app.use(cors());


// Synchronize models with the database
//const db = require("./models");
//db.sequelize.sync();

module.exports = app;

const bodyParser = require("body-parser");
// Parse requests of content-type: application/json
app.use(bodyParser.json());

// Parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Welcome Hacker :)');
});


// Videos
//app.use('/videos', videos);
//app.use('/', auth);
