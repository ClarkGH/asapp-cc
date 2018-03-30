const express = require('express'),
  app = express(),
  path = require('path');

app.set('port', process.env.PORT || 8080);

app.use(express.static('./dist/'))

app.get('/', (req, res) => {
  res.send('hello world');
});

let server = app.listen(app.get('port'), function () {
  console.log('Node server listening on port ' + server.address().port);
});
