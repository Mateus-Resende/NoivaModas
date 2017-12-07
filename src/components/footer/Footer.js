import React, { Component } from 'react';
import './footer.css';
import HardwareComputer from 'material-ui/svg-icons/hardware/computer';

class Footer extends Component {
    render() {
        return (
            <footer className="app-footer">
                <span className="footer-text">Feito por Mateus Resende</span>
                <br />
                <HardwareComputer color="ededed"/>
            </footer>
        );
    }
}

export default Footer;
