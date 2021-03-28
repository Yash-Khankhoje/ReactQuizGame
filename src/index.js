// System libraries import
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/@mdi/font/css/materialdesignicons.min.css';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';

// Custome components imports
import './Styles/styles.scss';

// Code for index.js starts hear.
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
