import React from 'react';
import {Layout} from "./layout/Layout";
import {BrowserRouter as Router, useHistory} from "react-router-dom";
import ReactGA from 'react-ga';

function App() {
  useHistory().listen(location => {
    ReactGA.set({ page: location.pathname }); // Update the user's current page
    ReactGA.pageview(location.pathname); // Record a pageview for the given page
  });

  return (
    <Router>
      <Layout/>
    </Router>
  );
}

export default App;
