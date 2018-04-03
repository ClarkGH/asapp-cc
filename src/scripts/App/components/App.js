import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';

const client = new ApolloClient();

client
  .query({
    query: gql`
      {
        messages {
          id
          content
        }
      }
    `,
  })
  .then(data => console.log({ data }));

function App() {
  return (
    <ApolloProvider client={client} >
      <h1>Hello, Friend!</h1>
    </ApolloProvider>
  );
}

export default App;
