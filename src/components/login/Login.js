import React, {Component} from 'react';
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import './login.css';

class Login extends Component {
    render() {
        return (
            <div className="login-wrapper">
                <div className="login-email-wrapper">
                    <TextField
                        floatingLabelText="email"
                        hintText="your@email.com"
                        type='email'
                        style={{width: 300}}
                    /><br />
                    <TextField
                        floatingLabelText="password"
                        type='password'
                        hintText="password"
                        className="input-width"
                        style={{width: 300}}
                    /><br />
                </div>
                <br />
                <div className="login-submit">
                    <RaisedButton label="Log in" primary={true} />
                </div>
            </div>
        );
    }
}

export default Login;