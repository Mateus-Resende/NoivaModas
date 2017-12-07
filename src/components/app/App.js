import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Body from '../body/Body';

import './app.css';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <Body />
            </MuiThemeProvider>
        );
    }
}

export default App;
