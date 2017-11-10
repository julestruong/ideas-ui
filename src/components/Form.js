import React from 'react';
import { Input, Button } from 'muicss/react';
import { FormattedMessage } from 'react-intl';
/**
 * 
 */
class Form extends React.Component
{
    constructor(props) {
        super(props);

        this.ideas = props.ideas;

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
        this.ideas.push({
            id: this.ideas.length + 1,
            body: this.state.value,
        });

        this.props.onIdeasChange(this.ideas);

        this.setState({value: ''});
    }

    render() {
        return (
            <div>
                {this.state.value}
                <Input 
                    hint="Your idea" 
                    floatingLabel={true}
                    value={this.state.value}
                    onChange={this.onChange}
                    />
                <Button color="primary" onClick={this.onSubmit}>
                    <FormattedMessage id="submit"/>
                </Button>
            </div>
        );
    };
}

export default Form;
