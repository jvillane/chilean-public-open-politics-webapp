import React from 'react';
import {Layout} from "./layout/Layout";
import {Redirect, Route, Switch, useHistory} from "react-router-dom";
import ReactGA from 'react-ga';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fas,
  faCheck,
  faTimes,
  faAngleRight
} from '@fortawesome/free-solid-svg-icons';

import {HomeView} from "./views/HomeView";
import {ExecutiveView} from "./views/ExecutiveView";
import {LegislativeView} from "./views/LegislativeView";
import {JudiciaryView} from "./views/JudiciaryView";
import {ProfileView} from "./views/ProfileView";

library.add(
  fas,
  faCheck,
  faTimes,
  faAngleRight
);

function App() {
  useHistory().listen(location => {
    ReactGA.set({page: location.pathname}); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
  });

  return (
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
      <Route exact path="/judicial">
        <Layout children={<JudiciaryView/>}/>
      </Route>
      <Route exact path="/figura/:id">
        <Layout children={<ProfileView/>}/>
      </Route>
      <Redirect from="*" to="/inicio"/>
    </Switch>
  );
}

export default App;
