var express = require('express');
var path = require('path');
var cors = require('cors');

var app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/index.html'));
});

app.get('/api/wines', (req, res) => {
  res.send(wines);
})

app.get('/api/wines/:id', (req, res) => {
  const wine = wines.find(el => el.id === req.params.id);
  res.send(wine);
})

module.exports = app;
