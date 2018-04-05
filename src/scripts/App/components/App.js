import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Chat from './Chat';

const client = new ApolloClient();

function App() {
  return (
    <ApolloProvider client={client} >
      <div className="App">
        <Chat className="left-pane" userId={1} chat={1} />
        <Chat className="right-pane" userId={3} chat={2} />
      </div>
    </ApolloProvider>
  );
}

export default App;
