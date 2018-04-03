import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import { createServer } from 'http';

// GraphQL Schema/Mocks
import Schema from './data/schema';
import Mocks from './data/mocks';

// Server routing
const app = express();

app.set('port', process.env.PORT || 8080);

app.use(express.static('./dist/'));

// DB setup
const chatSchema = makeExecutableSchema({
  typeDefs: Schema,
});

addMockFunctionsToSchema({
  schema: chatSchema,
  mocks: Mocks,
  preserveResolvers: true,
});

app.use('/graphql', bodyParser.json(), graphqlExpress({
  schema: chatSchema,
  context: {},
}));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));  

const graphQLServer = createServer(app);

graphQLServer.listen(app.get('port'), () => console.log(`Application is now running on http://localhost:${app.get('port')}`));
