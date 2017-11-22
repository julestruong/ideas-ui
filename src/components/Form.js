import React from 'react';
import { Input, Button } from 'muicss/react';
import { FormattedMessage } from 'react-intl';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const createIdea = gql`
    mutation createIdea($body: String!) {
        createIdea(body: $body) {
            id,
            body,
            email,
            votes,
            voters,
            week
        }
    }
`

/**
 * 
 */
class Form extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            value: '',
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    };

    onChange(ev) {
        this.setState({
            value: ev.target.value,
        });
    };

    onSubmit(e) {
        this.props.mutate({
            variables: { body: this.state.value }
        }).then(({ data: { createIdea }, errors }) => {
            if (errors) throw new Error(errors);
    
            this.props.onIdeasChange({
                id: createIdea.id,
                body: createIdea.body,
                email: createIdea.email,
                votes: createIdea.votes,
                voters: createIdea.voters,
                week: createIdea.week,
            });
            this.setState({value: ''});
        }).catch((error) => {
            console.log("error", error);
            this.setState({value: ''});
        });
    }

    render() {
        return (
            <div>
                Votre idée : {this.state.value}
                <Input 
                    hint="Your idea" 
                    floatingLabel={true}
                    value={this.state.value}
                    onChange={this.onChange}
                    />
                <Button color="primary" onClick={this.onSubmit}>
                    <FormattedMessage id="submit"/>
                </Button>
                {this.props.children}
            </div>
        );
    };
}

export default graphql(createIdea)(Form);
