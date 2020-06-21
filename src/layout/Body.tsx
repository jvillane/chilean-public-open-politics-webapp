import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import {AuthoritiesView} from "../views/AuthoritiesView";
import {ElectionsView} from "../views/ElectionsView";
import {MainView} from "../views/MainView";
import {ElectionView} from "../views/ElectionView";

export const Body: React.FC = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/autoridades">
          <AuthoritiesView/>
        </Route>
        <Route exact path="/elecciones">
          <ElectionsView/>
        </Route>
        <Route exact path="/elecciones/:date">
          <ElectionView/>
        </Route>
        <Route exact path="/">
          <MainView/>
        </Route>
        <Redirect from="*" to='/'/>
      </Switch>
    </main>
  )
}
