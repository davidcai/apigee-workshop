var express = require('express');
var app = express();

app.listen('1337');

app.get('/hello', function(req, res) {
  res.send('Hello world');
});

app.get('/today', function(req, res) {
  res.json({ today: new Date() });
});

app.use('/', express.static(__dirname));

console.log('Server running');
