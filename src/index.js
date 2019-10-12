import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { store } from '../src/_helpers'
import LoginApp from  './app/Login/LoginApp.js'
import Login from   '../src/app/Login/Login'
// setup fake backend
import { configureFakeBackend } from '../src/_helpers'
configureFakeBackend();

render( 
    <Provider store={store}>
        <LoginApp />
    </Provider>,
    window.document.getElementById('root'));
 










// import React from "react"
// import ReactDOM from "react-dom"
// import RootComponent from "./RootComponent"
// import * as serviceWorker from './serviceWorker';
// ReactDOM.render(<RootComponent />, window.document.getElementById('root'));

// serviceWorker.unregister();



















