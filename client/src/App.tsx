import React, { Suspense } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo-hooks';
import AlarmsList from './AlarmsList';
import './App.css';
import CreateAlarm from './CreateAlarm';

const SERVER_URL = 'http://localhost:4000';

const client = new ApolloClient({
  uri: SERVER_URL,
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Suspense fallback={<div>Loading...</div>}>
        <h1>Alarms</h1>
        <CreateAlarm />
        <AlarmsList />
      </Suspense>
    </ApolloProvider>
  );
};

export default App;
