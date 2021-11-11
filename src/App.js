import React from 'react';
// Virtual Router 
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// Personal Components

// View
import LandingPage from "./Views/LandingPage";
// Style in SASS
import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route path="/about">
              {'about'}
            </Route>
            <Route path="/dashboard">
              {'dashboard'}
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
