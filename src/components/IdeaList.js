import React from 'react';
import Idea from './Idea';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

/**
 * 
 */
class IdeaList extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            ideas: {},
            refetch: () =>  {}
        }
    }

    componentDidMount() {
        console.log(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            ideas: nextProps.data.ideas,
            refetch: nextProps.data.refetch
        })
        console.log("WilReceive", nextProps);
    }

    componentDidUpdate() {
        console.log("component did update");
    }

    render() {
        console.log("RENDER", this.state);
        const ideas = this.props.ideas || [];
        const listIdeas = ideas.map((idea) => 
            (<Idea className="list-ideas" key={idea.id} idea={idea}></Idea>)
        );

        // return (
        //     <div>
        //         <div className="list-ideas">{listIdeas}</div>
        //         <div onClick={() => refetch()}>
        //             Refetch
        //         </div>
        //     </div>
        // );

        return (<div>
            <div onClick={() => this.state.refetch()}>
                Refetch
            </div>
            <ul>
                {this.state.ideas.length && this.state.ideas.map(idea => (
                    <li key={idea.id}>
                         {idea.body}
                    </li>
                ))}
            </ul>
        </div>);
    };
}

// function IdeaList({ data }) {
//     console.log(data);

//     return (
//         <div>
//             <div onClick={() => data.refetch()}>
//                 Refetch
//             </div>
//             <ul>
//                 {data.ideas && data.ideas.map(idea => (
//                     <li key={idea.id}>
//                          {idea.body}
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

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

export default graphql(query, { options: { variables: { }}})(IdeaList);
