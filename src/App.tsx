import React from 'react';
import {Layout} from "./layout/Layout";
import {Redirect, Route, Switch, useHistory} from "react-router-dom";
import ReactGA from 'react-ga';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faAngleRight, faCheck, faMinusCircle, fas, faTimes, faUser} from '@fortawesome/free-solid-svg-icons';

import {HomeView} from "./views/HomeView";
import {ExecutiveView} from "./views/ExecutiveView";
import {LegislativeView} from "./views/LegislativeView";
import {JudiciaryView} from "./views/JudiciaryView";
import {LegislativeSenatorsView} from "./views/LegislativeSenatorsView";
import {LegislativeDeputiesView} from "./views/LegislativeDeputiesView";
import {ThemeProvider} from '@material-ui/styles';
import MuiTheme from "./theme";
import {LegislativeDeputyDetailsView} from "./views/LegislativeDeputyDetailsView";
import {LegislativeDeputiesVotingView} from "./views/LegislativeDeputiesVotingView";

library.add(
  fas,
  faAngleRight,
  faCheck,
  faMinusCircle,
  faTimes,
  faUser
);

function App() {
  useHistory().listen(location => {
    ReactGA.set({page: location.pathname}); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
  });

  return (
    <ThemeProvider theme={MuiTheme}>
      <Switch>
        <Route exact path="/inicio">
          <Layout children={<HomeView/>}/>
        </Route>
        <Route exact path="/ejecutivo">
          <Layout children={<ExecutiveView/>}/>
        </Route>
        <Route exact path="/legislativo">
          <Layout children={<LegislativeView/>}/>
        </Route>
        <Route exact path="/legislativo/senado">
          <Layout children={<LegislativeSenatorsView/>}/>
        </Route>
        <Route exact path="/legislativo/camara/integrantes">
          <Layout children={<LegislativeDeputiesView/>}/>
        </Route>
        <Route exact path="/legislativo/camara/integrantes/:id">
          <Layout children={<LegislativeDeputyDetailsView/>}/>
        </Route>
        <Route exact path="/legislativo/camara/votaciones">
          <Layout children={<LegislativeDeputiesVotingView/>}/>
        </Route>
        <Route exact path="/judicial">
          <Layout children={<JudiciaryView/>}/>
        </Route>
        <Redirect from="*" to="/inicio"/>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
