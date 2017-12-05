import React, { Component } from 'react';
import logo from '../../assets/svg/logo.svg';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to Electron + React</h1>
            </header>
        );
    }
}

export default Header;
