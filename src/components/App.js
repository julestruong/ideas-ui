import React from 'react';
import { Appbar, Container, Button } from 'muicss/react';
import IdeaList from './IdeaList';
import { FormattedMessage } from 'react-intl';

class App extends React.Component {

    
    render() {
        const ideas = [
            { id: 1, body: 'Parler en anglais', author: 'Jules' },
            { id: 2, body: 'Speak in spanish', author: 'Julio' },
        ];
        return (
            <div>
                <Appbar>
                    <table width="100%">
                        <tbody>
                            <tr><td>
                                <FormattedMessage
                                    id="welcome"
                                    values={{name: "jean"}}
                                />    
                            </td></tr>
                        </tbody>
                    </table>
                </Appbar>
                <Container>
                    <IdeaList ideas={ideas}/>
                </Container>
            </div>
        );
    }
}

export default App;
