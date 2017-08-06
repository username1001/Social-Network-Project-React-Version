import React, { Component } from 'react';


import google_store from '../../images/LoginPage/google_store.png';
import app_store from '../../images/LoginPage/app_store.png';

const GetTheApp = () => (
   <div className="get-the-app">
     Get the app<br/><br/>
     <div>
       <img src={app_store} alt=""/>
       <img src={google_store} alt=""/>
     </div>
   </div> 
)

export default GetTheApp;