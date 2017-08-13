import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

//Components import
import App from './containers/App';

//style import
import style from './styles/main.scss';


ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));