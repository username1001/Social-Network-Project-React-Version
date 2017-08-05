import React, { Component } from 'react';

import GetTheApp from './GetTheApp';

class LoginPlaceHolder extends Component {
    render() {
        return (
            <div className="lph-sph-gta"> 
                <div className="login-place-holder">
                    <div>
                    <h1 className="title">Instagram</h1>
                    <form>
                        <input type="text" placeholder="Username" name="username" autocorrect="off" maxlength="20"/> <br/>
                        <input type="text" placeholder="Password" name="password"/> <br/>
                        <button type="submit">Log in</button>    
                        <small>Forgot password?</small>
                    </form>
                    </div>
                    <div className="dont-have-account">
                    Don't have an account? Sign up    
                    </div>
                </div>
                <GetTheApp></GetTheApp>
            </div>
        );
    }
}

export default LoginPlaceHolder;