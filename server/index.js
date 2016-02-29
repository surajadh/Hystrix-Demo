var express = require('express');
var app = express();

app.get('/rogue', function (req, res) {
  res.send('Hello from rogue!');
});


app.get('/cookie-monster', function (req, res) {
  res.send('Hello from cookie-monster!');
});

app.get('/groot', function (req, res) {
  res.send('Hello from groot!');
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
