import React, { Component } from 'react';

import GetTheApp from './GetTheApp';

class SignUpPlaceHolder extends Component {
    render() {
        return (
            <div className="lph-sph-gta"> 
                <div className="signup-place-holder">
                    <div>
                        <h1 className="title">Instagram</h1>
                        <div className="signup-head">
                           <h4 className="desc">Sign up to see photos and videos from your friends.</h4>
                           <button>Log in with Facebook</button>
                           <div className="or-line"><div></div><div className="or">OR</div><div></div></div>
                        </div>
                        <form onSubmit={e => e.preventDefault()}>
                            <input type="text" placeholder="Mobile Number or Email" name="emailOrPhone" autocorrect="off" maxlength="20"/> <br/>
                            <input type="text" placeholder="Full Name" name="fullName"/> <br/>
                            <input type="text" placeholder="Username" name="username" autocorrect="off"/> <br/>
                            <input type="password" placeholder="Password" name="password"/> <br/>
                            <button type="submit">Sign up</button>    
                            <small>By signing up, you agree to our <strong>Terms & Privacy Policy</strong>.</small>
                        </form>
                    </div>
                    <div className="have-an-account">
                    Have an account? <span onClick={this.props.onClick}>Log in</span>    
                    </div>
                </div>
                <GetTheApp></GetTheApp>
            </div>
        );
    }
}

export default SignUpPlaceHolder;