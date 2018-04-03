const express = require('express'),
  app = express(),
  path = require('path'),
  express_graphql = require('express-graphql'),
  { buildSchema } = require('graphql');

// the schema
let schema = buildSchema(`
  type Query {
    message: String
  }
`);

// the resolver for root
let root = {
  message: () => 'Hi mom!'
}

app.set('port', process.env.PORT || 8080);

app.use(express.static('./dist/'));

app.use('/graphql', express_graphql({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

let server = app.listen(app.get('port'), function () {
  console.log('Node server listening on port ' + server.address().port);
});
