import React, { Component } from 'react';

import GetTheApp from './GetTheApp';

class LoginPlaceHolder extends Component {
    render() {
        return (
            <div className="lph-sph-gta"> 
                <div className="login-place-holder">
                    <div>
                    <h1 className="title">Instagram</h1>
                    <form onSubmit={e => e.preventDefault()}>
                        <input type="text" placeholder="Username" name="username" autocorrect="off" maxlength="20"/> <br/>
                        <input type="password" placeholder="Password" name="password"/> <br/>
                        <button type="submit">Log in</button>    
                        <small>Forgot password?</small>
                    </form>
                    </div>
                    <div className="dont-have-account">
                    Don't have an account? <span onClick={this.props.onClick}>Sign up</span>    
                    </div>
                </div>
                <GetTheApp></GetTheApp>
            </div>
        );
    }
}

export default LoginPlaceHolder;