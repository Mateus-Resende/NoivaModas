import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Body from '../body/Body';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
    tealA700, teal500, teal700, grey400, grey100, grey500
} from 'material-ui/styles/colors';
import './app.css';

class App extends Component {
    muiTheme = getMuiTheme({
        palette: {
            height: 60,
            primary1Color: teal500,
            primary2Color: teal700,
            primary3Color: grey400,
            accent1Color: tealA700,
            accent2Color: grey100,
            accent3Color: grey500
        }
    });
    
    render() {
        
        return (
            <MuiThemeProvider muiTheme={this.muiTheme}>
                <Body />
            </MuiThemeProvider>
        );
    }
}

export default App;
