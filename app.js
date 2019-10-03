var express = require('express');
var path = require('path');
var cors = require('cors');
const wines = require('./public/data/top100_2018_full');


var app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '/client')));

app.get('/api/wines', (req, res) => {
  res.send(wines);
})

app.get('/api/wines/:id', (req, res) => {
  const wine = wines.find(el => el.id === req.params.id);
  res.send(wine);
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/index.html'));
});

module.exports = app;
