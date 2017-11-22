import React from 'react';
import { Route } from 'react-router-dom';
import Callback from './Callback';
import Temp from './Temp';

import Auth from '../auth/auth.js';
const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
        auth.handleAuthentication();
    }
};

class Routes extends React.Component {
    render() {
        return (
            <div>
                <Route path="/" exact={true} render={(props) => { return null}}/>
                <Route path="/callback" render={(props) => {
                    handleAuthentication(props);
                    return <Callback props={props}/>
                }}/>
                <Route path="/test" render={(props) => { return (<div>TEST</div>)}}/>
                <Route path="/temp" render={(props) => (<Temp/>)}/>
            </div>  
       );
    }
}

export default Routes;
