import React, { Component } from 'react';

import LoginPlaceHolder from '../Components/LoginPage/LoginPlaceHolder'

class LoginPage extends Component {
    render() {
        return (
            <div className="login-page">
              <div className="container">
                  <LoginPlaceHolder />
              </div> 
            </div>
        );
    }
}

export default LoginPage;