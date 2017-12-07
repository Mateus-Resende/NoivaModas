import React, {Component} from 'react';
import Header from '../header/Header';
import Login from '../login/Login';
import Footer from '../footer/Footer';

class Body extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Login/>
                <Footer/>
            </div>
        );
    }
}


export default Body;
