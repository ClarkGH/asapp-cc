import { makeExecutableSchema, addMockFunctionsToSchema, } from 'graphql-tools';
import resolvers from './resolvers';
const typeDefs = `
  scalar Date

  type User {
    id: ID
    displayName: String
  }
  type Message {
    id: ID
    content: String
    createdBy: User
    createdAt: String
  }
  type Query {
    messages: [Message]
    users: [User]
  }
`;
const schema = makeExecutableSchema({ typeDefs, resolvers });
export default schema;