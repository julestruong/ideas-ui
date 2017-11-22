import React from 'react';
import ReactDOM from 'react-dom';

import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';

import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router } from 'react-router-dom';


import App from './components/App';
import '../node_modules/muicss/dist/css/mui.min.css';

// import messages from '../trans/fr';
import messages from '../trans/en';
import Auth from './auth/auth.js';

addLocaleData([...en, ...fr]);

const httpLink = createHttpLink({
    uri: 'http://localhost:8383/api'
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('access_token');
    // return the headers to the context so httpLink can read them
    return {
      headers: {
        authorization: token ? `Bearer ${token}` : null,
      }
    }
  });

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

const auth = new Auth();

ReactDOM.render(
    <ApolloProvider client={client}>
        <IntlProvider locale="en" messages={messages}>
            <Router>
                <App auth={auth}/>
            </Router>
        </IntlProvider>
    </ApolloProvider>
    ,document.getElementById('root')
);
