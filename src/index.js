
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import appReducer from './appReducer'

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';


let middlewares = [thunkMiddleware];

export const store = createStore(appReducer, applyMiddleware(...middlewares));

// Root element for the App
const rootEl = document.getElementById('root');

// Function to render the App wrapped with BrowserRouter
function render(AppComponent) {
  ReactDOM.render(<AppComponent store={store} />, rootEl);
}

render(App);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
