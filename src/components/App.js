import React from 'react';
import { Appbar, Container, Button } from 'muicss/react';
import { FormattedMessage } from 'react-intl';
import { Link, Route } from 'react-router-dom';

import Routes from './Routes';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    };

    login() {
        this.props.auth.login()
    }

    logout() {
        this.props.auth.logout();
    }

    render() {
        const { isAuthenticated } = this.props.auth;

        return (
            <div>
                <Appbar>
                    { !isAuthenticated() && (
                        <Button onClick={this.login}>Login</Button>
                    )}
                    { isAuthenticated() && (
                        <div>
                            <Button onClick={this.logout}>Logout</Button>
                            
                        </div>
                    )}
                    <table width="100%">
                        <tbody>
                            <tr style={{verticalAlign:"right"}}>
                                <td className="mui--appbar-height">
                                    <Link to={`/test`}>
                                        <FormattedMessage
                                            id="welcome"
                                            values={{name: "jean"}}
                                        />    
                                    </Link>
                                    <Link to={`/callback`}>
                                        Callback
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Appbar>
                <Container>
                    <Routes/>
                </Container>
            </div>
        );
    }
}

export default App;
