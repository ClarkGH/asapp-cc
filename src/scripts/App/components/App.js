import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Chat from './Chat';
// import gql from 'graphql-tag';

const client = new ApolloClient();

// client
//   .query({
//     query: gql`
//       {
//         messages {
//           id
//           content
//         }
//       }
//     `,
//   })
//   .then(data => console.log({ data }));

function App() {
  console.log(client);
  return (
    <ApolloProvider client={client} >
      <div className="App">
        <Chat className="left-pane" user="batman" />
        <Chat className="right-pane" user="joker" />
      </div>
    </ApolloProvider>
  );
}

export default App;
