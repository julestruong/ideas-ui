import React from 'react';
import { Appbar, Container, Button } from 'muicss/react';
import IdeaList from './IdeaList';

class App extends React.Component {

    
    render() {
        const ideas = [
            { id: 1, body: 'Parler en anglais', author: 'Jules' },
            { id: 2, body: 'Speak in spanish', author: 'Julio' },
        ];
        return (
            <div>
                <Appbar></Appbar>
                <Container>
                    <IdeaList ideas={ideas}/>
                </Container>
            </div>
        );
    }
}

export default App;
