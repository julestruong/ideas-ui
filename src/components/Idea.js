import React from 'react';
import { Panel, Button } from 'muicss/react';
/**
 * 
 */
class Idea extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            body: props.idea.body,
            author: props.idea.author,
            createdAt: new Date(),
            updatedAt: new Date(),
            nbVoters: 0,
        }

        this.voteIdea = this.voteIdea.bind(this);
    }

    voteIdea(evt) {
        this.setState(prevState => ({
            nbVoters: prevState.nbVoters + 1
        }));
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

export default Idea;
