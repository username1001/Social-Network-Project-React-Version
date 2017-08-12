import React, { Component } from 'react';

import LoginPlaceHolder from '../Components/LoginPage/LoginPlaceHolder';
import SignUpPlaceHolder from '../Components/LoginPage/SignUpPlaceHolder';

import Animation from '../Components/LoginPage/Animation';

class LoginPage extends Component {
    constructor(props){
        super(props)
        this.state = { 
            isLoginPage: true,
            isSignUpPage: false
         }
        this.handleLoginClick = this.handleLoginClick.bind(this)
    }
    
    handleLoginClick(e){
        e.preventDefault()
        console.log(e)
        let { isLoginPage, isSignUpPage } = this.state
        this.setState({
            isLoginPage : !isLoginPage,
            isSignUpPage: !isSignUpPage
        })
    }
    
    render() {
        const isLoginPage = this.state.isLoginPage
        return (
            <div className="login-page">
              <div className="container">
                  <Animation/>
                 {isLoginPage ? 
                     <LoginPlaceHolder onClick={this.handleLoginClick}/> : 
                     <SignUpPlaceHolder onClick={this.handleLoginClick}/>
                  }              
              </div> 
            </div>
        );
    }
}

export default LoginPage;