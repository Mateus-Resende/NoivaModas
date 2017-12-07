import React, {Component} from 'react';
import './header.css';
import AppBar from "material-ui/AppBar";

class Header extends Component {
    render() {
        return (
            <div>
                <AppBar
                    showMenuIconButton={false}
                    className="App-header"
                    title="Bem-vindo!"
                />
            </div>
        );
    }
}

export default Header;
