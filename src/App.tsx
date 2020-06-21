import React from 'react';
import {Layout} from "./layout/Layout";
import {BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout/>
    </Router>
  );
}

export default App;
