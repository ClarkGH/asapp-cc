import { makeExecutableSchema, addMockFunctionsToSchema, } from 'graphql-tools';
import resolvers from './resolvers';
const typeDefs = `
  type Message {
    id: ID!
    content: String
  }
  type Query {
    messages: [Message]
  }
`;
const schema = makeExecutableSchema({ typeDefs, resolvers });
export default schema;