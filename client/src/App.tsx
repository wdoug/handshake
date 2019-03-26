import React, { Suspense } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo-hooks';
import Alarms from './Alarms';
import './App.css';

const SERVER_URL = 'http://localhost:4000';

const client = new ApolloClient({
  uri: SERVER_URL,
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Suspense fallback={<div>Loading...</div>}>
        <Alarms />
      </Suspense>
    </ApolloProvider>
  );
};

export default App;
