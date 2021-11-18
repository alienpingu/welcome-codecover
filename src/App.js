import React from 'react';
// Virtual Router 
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
// Cookie 
import { CookiesProvider } from "react-cookie";


// Gtag manager
import TagManager from 'react-gtm-module'

// Components
import CookieBanner from './Components/CookieBanner'

// View
import LandingPage from "./Views/LandingPage";
import PrivacyPolicy from "./Views/PrivacyPolicy";
import CookiePolicy from "./Views/CookiePolicy";
// Style in SASS
import './App.scss';

function App() {
  const tagManagerArgs = {
      gtmId: 'GTM-M4BWLV5'
  }
  TagManager.initialize(tagManagerArgs)
  return (
    <div className="App">
      <CookiesProvider>
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <LandingPage />
              </Route>
              <Route path="/privacy">
                <PrivacyPolicy />
              </Route>
              <Route path="/cookie">
                <CookiePolicy />
              </Route>
            </Switch>
          </div>
        </Router>
        <CookieBanner />
      </CookiesProvider>
    </div>
  );
}

export default App;
