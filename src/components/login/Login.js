import React, { Component } from 'react';
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import Paper from 'material-ui/Paper';
import NewUser from '../user/New';
import UserDAO from '../../persistent/user/userDAO'
import './login.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: undefined
        };
        this.updateEmail = this.updateEmail.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.verifyLogin = this.verifyLogin.bind(this);
    }
    
    updateEmail(event) {
        this.setState({email: event.target.value});
    }
    
    updatePassword(event) {
        this.setState({password: event.target.value});
    }
    
    verifyLogin() {
        console.log(this.state.email);
        console.log(this.state.password);
    }
    
    static firstTimeLogin() {
        let successCB = function(data) {
            return data.length > 0;
        };
        
        let failCB = function(error, data) {
            this.setState({error: error});
            return false;
        };
        
        return true;
    }
    
    renderLoginForm() {
        return (
            <div className="login-wrapper">
                <Paper className="login-container" zDepth={2}>
                    <div className="login-email-wrapper">
                        <h2>Login</h2>
                        <br />
                        <TextField
                            floatingLabelText="email"
                            hintText="noiva@modas.com"
                            type='email'
                            style={{width: 300}}
                            value={this.state.email}
                            onChange={this.updateEmail}
                        /><br/>
                        <TextField
                            floatingLabelText="senha"
                            type='password'
                            hintText="senha"
                            className="input-width"
                            style={{width: 300}}
                            value={this.state.password}
                            onChange={this.updatePassword}
                        /><br/>
                    </div>
                    <br/>
                    <div className="login-submit">
                        <RaisedButton
                            label="Entrar"
                            primary={true}
                            onClick={this.verifyLogin}
                        />
                    </div>
                </Paper>
            </div>
        );
    }
    
    render() {
        if (Login.firstTimeLogin()){
            return <NewUser admin={true} /> ;
        } else {
            return this.renderLoginForm();
        }
    }
}

export default Login;