import React from 'react';
import { Appbar, Container, Button } from 'muicss/react';
import IdeaList from './IdeaList';
import Form from './Form';
import { FormattedMessage } from 'react-intl';

class App extends React.Component {

    
    constructor(props) {
        super(props);

        this.state = {
            ideas: [
                { id: 1, body: 'Parler en anglais', author: 'Jules' },
                { id: 2, body: 'Speak in spanish', author: 'Julio' },
            ],
        };

        this.onIdeasChange = this.onIdeasChange.bind(this);
    };

    onIdeasChange(ideas) {
        console.log("Change ideas", ideas);
        this.setState({ideas: ideas});
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
                    ideas={this.state.ideas}
                    onIdeasChange={this.onIdeasChange}
                    ></Form>
                    {/* <IdeaList ideas={this.state.ideas}/> */}
                    <IdeaList/>
                </Container>
            </div>
        );
    }
}

export default App;
