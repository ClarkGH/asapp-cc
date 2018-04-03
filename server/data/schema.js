import { makeExecutableSchema, addMockFunctionsToSchema, } from 'graphql-tools';
import mocks from './mocks';

const typeDefs = `
  type Message {
    id: ID!
    content: String
  }
  type Query {
    messages: [Message]
  }
`;
const schema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({ 
  schema, 
  mocks, 
  preserveResolvers: true,
});
export { schema };