
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');


const app = express();
const secret = require('./routes/secret.routes');

// Add mysql database connection
const db = require('./config/db.config.js');


// Avoid CORS issues
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

module.exports = app;

const bodyParser = require("body-parser");
// Parse requests of content-type: application/json
app.use(bodyParser.json());

// Parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hi Hacker')
});

app.get('/add', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const InsertQuery = "INSERT INTO user_data (username, password) VALUES (?, ?)";
  db.query(InsertQuery, [username, password], (err, result) => {
    console.log(result)
  })
}); 




app.use('/secret', secret);  