import React from 'react';
import ReactDOM from 'react-dom';

import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';

import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';

import App from './components/App';
import '../node_modules/muicss/dist/css/mui.min.css';

// import messages from '../trans/fr';
import messages from '../trans/en';

addLocaleData([...en, ...fr]);

const client = new ApolloClient({
    link: new HttpLink({
        uri: 'http://localhost:8383/api'
    }),
    cache: new InMemoryCache()
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <IntlProvider locale="en" messages={messages}>
            <App/>
        </IntlProvider>
    </ApolloProvider>
    ,document.getElementById('root')
);
