import React from 'react';

import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

import IdeaList from './IdeaList';
import Form from './Form';

class Temp extends React.Component {
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
        this.setState({
            ideas: nextProps.data.ideas ? nextProps.data.ideas : [],
            refetch: nextProps.data.refetch
        })
    }

    render() {
        return (
            <div>
                <Form onIdeasChange={this.onIdeasChange}/>
                <IdeaList ideas={this.state.ideas} refetch={this.state.refetch}/>   
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


export default  graphql(query)(Temp);
