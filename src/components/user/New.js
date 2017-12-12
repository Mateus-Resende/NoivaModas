import React, { Component } from 'react';
import Bcrypt from 'bcrypt-node';
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import Paper from 'material-ui/Paper';

class NewUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmPassword: ''
        };
        
        this.changeEmail = this.changeEmail.bind(this);
        this.changePassword = this.changePassword.bind(this);
        this.changePasswordConfirmation = this.changePasswordConfirmation.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }
    
    changeEmail(event) {
        this.setState({ email: event.target.value });
    }
    
    changePassword(event) {
        this.setState({ password: Bcrypt.hashSync(event.target.value) });
    }
    
    changePasswordConfirmation(event) {
        this.setState({ passwordConfirmation: Bcrypt.hashSync(event.target.value) });
    }
    
    submitForm() {
    
    }
    
    render(){
        return (
            <div className="login-wrapper">
                <Paper className="login-container" zDepth={2}>
                    <div className="login-email-wrapper">
                        <h2>Crie o primeiro usuário</h2>
                        <br />
                        <TextField
                            floatingLabelText="email"
                            hintText="noiva@modas.com"
                            type='email'
                            style={{width: 350}}
                            value={this.state.email}
                            onChange={this.changeEmail}
                        /><br/>
                        <TextField
                            floatingLabelText="senha"
                            type='password'
                            hintText="senha"
                            className="input-width"
                            style={{width: 350}}
                            value={this.state.password}
                            onChange={this.changePassword}
                        /><br/>
                        <TextField
                            floatingLabelText="confirme a senha"
                            type='password'
                            hintText="senha"
                            className="input-width"
                            style={{width: 350}}
                            value={this.state.password}
                            onChange={this.changePasswordConfirmation}
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
}

export default NewUser;