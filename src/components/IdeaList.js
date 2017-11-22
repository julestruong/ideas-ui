import React from 'react';
import Idea from './Idea';
import { Button } from 'muicss/react';
import { FormattedMessage } from 'react-intl';

/**
 * 
 */
class IdeaList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ideas: props.ideas,
            refetch: props.refetch,
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            ideas: nextProps.ideas ? nextProps.ideas : []
        });
    }

    render() {
        const ideas = this.state.ideas;
        const listIdeas = ideas.map((idea) => 
            (<Idea className="list-ideas" key={idea.id} idea={idea}></Idea>)
        );

        return (
            <div>
                <div className="list-ideas">{listIdeas}</div>
                <Button color="accent" onClick={() => this.state.refetch()}>
                    <FormattedMessage id="refetch"/>
                </Button>
            </div>
        );
    };
}


export default IdeaList;
