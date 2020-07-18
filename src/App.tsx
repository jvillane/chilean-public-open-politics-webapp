import React from 'react';
import {Layout} from "./layout/Layout";
import {Redirect, Route, Switch, useHistory} from "react-router-dom";
import ReactGA from 'react-ga';

import {library} from '@fortawesome/fontawesome-svg-core';
import {
  faAngleRight,
  faBan,
  faCheck,
  faFemale, faHandPaper,
  faMale,
  faMinusCircle,
  fas,
  faTimes,
  faUser
} from '@fortawesome/free-solid-svg-icons';

import {HomeView} from "./views/HomeView";
import {LegislativeDeputiesView} from "./views/LegislativeDeputiesView";
import {ThemeProvider} from '@material-ui/styles';
import MuiTheme from "./theme";
import {LegislativeDeputyDetailsView} from "./views/LegislativeDeputyDetailsView";
import {LegislativeDeputiesVotingView} from "./views/LegislativeDeputiesVotingView";
import {LegislativeDeputiesVotingDetailsView} from "./views/LegislativeDeputiesVotingDetailsView";
import {LegislativeSenatorsView} from "./views/LegislativeSenatorsView";
import {LegislativeSenatorDetailsView} from "./views/LegislativeSenatorDetailsView";

library.add(
  fas,
  faAngleRight,
  faBan,
  faCheck,
  faHandPaper,
  faFemale,
  faMale,
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
        <Route exact path="/">
          <Layout children={<HomeView/>}/>
        </Route>
        <Route exact path="/diputados/integrantes">
          <Layout children={<LegislativeDeputiesView/>}/>
        </Route>
        <Route exact path="/senadores/integrantes">
          <Layout children={<LegislativeSenatorsView/>}/>
        </Route>
        <Route exact path="/diputados/integrante/:id">
          <Layout children={<LegislativeDeputyDetailsView/>}/>
        </Route>
        <Route exact path="/senadores/integrante/:id">
          <Layout children={<LegislativeSenatorDetailsView/>}/>
        </Route>
        <Route exact path="/diputados/votaciones/:year?/:month?">
          <Layout children={<LegislativeDeputiesVotingView/>}/>
        </Route>
        <Route exact path="/diputados/votacion/:year/:id">
          <Layout children={<LegislativeDeputiesVotingDetailsView/>}/>
        </Route>
        <Redirect from="/10afp" to="/diputados/votacion/2020/33634"/>
        <Redirect from="*" to="/"/>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
