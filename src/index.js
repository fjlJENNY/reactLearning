import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Basic from './compontent/Basic'

import Layout from "./component2/Layout";

import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));


// ReactDOM.render(<Basic/> , document.getElementById('root'))

ReactDOM.render(<Layout />, document.getElementById('root'));


// setInterval(
//   function(){
//     ReactDOM.render(<Basic/> , document.getElementById('root'))
//   },1000)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
