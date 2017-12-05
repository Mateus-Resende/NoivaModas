import React, { Component } from 'react';
import Header from '../header/header';
import Login from '../login/login';
import Footer from '../footer/footer';
import './app.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Login />
                <Footer />
            </div>
        );
    }
}

export default App;
