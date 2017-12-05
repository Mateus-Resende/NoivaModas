import React, {Component} from 'react';
import logo from '../../assets/svg/logo.svg';

class Login extends Component {
    render() {
        return (
            <div>
                <div>
                    <label>
                        <span>Email: </span>
                        <input type='email'/>
                    </label>
                </div>
                <div>
                    <label>
                        <span>Password: </span>
                        <input type='password'/>
                    </label>
                </div>
                <div>
                    <button type='submit'>Log in</button>
                </div>
            </div>
        );
    }
}

export default Login;