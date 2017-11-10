import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { addLocaleData, IntlProvider } from 'react-intl';
import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';

import '../node_modules/muicss/dist/css/mui.min.css';

// import messages from '../trans/fr';
import messages from '../trans/en';

addLocaleData([...en, ...fr]);

ReactDOM.render(
    <IntlProvider locale="en" messages={messages}>
        <App/>
    </IntlProvider>
    ,document.getElementById('root')
);
