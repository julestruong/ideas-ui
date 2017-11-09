import React from 'react';
import Idea from './Idea';
/**
 * 
 */
class IdeaList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const ideas = this.props.ideas || [];
        const listIdeas = ideas.map((idea) => 
            (<Idea className="list-ideas" key={idea.id} idea={idea}></Idea>)
        );

        return (<div className="list-ideas">{listIdeas}</div>);
    };
}

export default IdeaList;
