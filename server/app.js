import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { createServer } from 'http';

// GraphQL Schema
import schema from './data/schema';

// Server routing
const app = express();

app.set('port', process.env.PORT || 8080);

app.use(express.static('./dist/'));

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema: schema,
  context: {},
}));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));  

const graphQLServer = createServer(app);

graphQLServer.listen(app.get('port'), () => console.log(`Application is now running on http://localhost:${app.get('port')}`));
