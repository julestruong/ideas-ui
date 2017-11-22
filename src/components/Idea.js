import React from 'react';
import { Panel, Button } from 'muicss/react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const voteMutation = gql`
    mutation voteIdea($id: Int!) {
        voteIdea(id: $id)
    }
`;

/**
 * 
 */
class Idea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.idea.id,
            body: props.idea.body,
            author: props.idea.author,
            createdAt: new Date(),
            updatedAt: new Date(),
            nbVoters: 0,
        }

        this.voteIdea = this.voteIdea.bind(this);
    }

    voteIdea(evt) {
        this.props.mutate({
            variables: { id: this.state.id  } 
        }).then(({ data, errors }) => {
            if (errors) throw new Error(errors);
            
            console.log(data);
            if(data.voteIdea) {
                this.setState(prevState => ({
                    nbVoters: prevState.nbVoters + 1
                }));
            }
        }).catch((error) => {
            console.log("error happened", error);
        });
    };

    render() {
        return (
            <Panel className="idea">
                <div className="idea-author">Auteur {this.state.author}</div>
                <div className="idea-body">Idée {this.state.body}</div>
                <div className="idea-date">Date {this.state.updatedAt.toLocaleTimeString()}</div>
                <div className="idea-voters">{this.state.nbVoters} voters</div>
                <Button color="primary" onClick={this.voteIdea}>Vote for this idea</Button>
            </Panel>
        );
    };
}

export default graphql(voteMutation)(Idea);
