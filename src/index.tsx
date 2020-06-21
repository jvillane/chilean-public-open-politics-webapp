import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import ReactGA from 'react-ga';

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS as string);
axios.defaults.baseURL = process.env.REACT_APP_BACKEND_BASE_URL;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
