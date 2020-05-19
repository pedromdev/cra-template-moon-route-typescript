import React from 'react';
import {ApolloProvider} from '@apollo/react-hooks';
import {BrowserRouter} from 'react-router-dom';
import Routes from './Routes';
import {client} from './graphql/client';
import './App.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
