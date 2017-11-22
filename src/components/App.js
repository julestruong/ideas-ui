import React from 'react';
import { Appbar, Container, Button } from 'muicss/react';
import IdeaList from './IdeaList';
import Form from './Form';
import { FormattedMessage } from 'react-intl';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

class App extends React.Component {

    
    constructor(props) {
        super(props);

        this.state = {
            ideas: [],
            refetch: () => {},
        };

        this.onIdeasChange = this.onIdeasChange.bind(this);
    };

    onIdeasChange(idea) {
        this.setState(prevState => (
            { ideas: [...prevState.ideas, idea] }
        ));
    }

    componentWillReceiveProps(nextProps) {
        console.log("nextprops", nextProps);
        this.setState({
            ideas: nextProps.data.ideas ? nextProps.data.ideas : [],
            refetch: nextProps.data.refetch
        })
    }

    render() {
        return (
            <div>
                <Appbar>
                    <table width="100%">
                        <tbody>
                            <tr>
                                <td>
                                    <FormattedMessage
                                        id="welcome"
                                        values={{name: "jean"}}
                                    />    
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Appbar>
                <Container>
                    <Form 
                        onIdeasChange={this.onIdeasChange}
                    ></Form>
                    <IdeaList ideas={this.state.ideas} refetch={this.state.refetch}/>
                </Container>
            </div>
        );
    }
}

const query = gql`
query IdeasQuery {
    ideas {
        id,
        body,
        email,
        votes,
        voters,
        week
    }
} 
`;


export default  graphql(query)(App);
