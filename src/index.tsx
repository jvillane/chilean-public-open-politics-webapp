import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import ReactGA from 'react-ga';
import {BrowserRouter as Router} from "react-router-dom";
import {BASE_URL} from "./config";
import 'moment/locale/es'
import moment from "moment-timezone";
import DateFnsUtils from "@date-io/moment";
import {MuiPickersUtilsProvider} from "@material-ui/pickers";

ReactGA.initialize('UA-170181856-1');
ReactGA.pageview(window.location.pathname + window.location.search);

axios.defaults.baseURL = BASE_URL;
moment.locale('es')

ReactDOM.render(
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
    <React.StrictMode>
      <Router>
        <App/>
      </Router>
    </React.StrictMode>
  </MuiPickersUtilsProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
