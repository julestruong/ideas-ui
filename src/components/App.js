import React from 'react';
import { Appbar, Container, Button } from 'muicss/react';

class App extends React.Component {
    render() {
        return (
            <div>
                <Appbar></Appbar>
                <Container>
                    <Button color="primary">Click me !</Button>
                </Container>
            </div>
        );
    }
}

export default App;
