import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AboutPage, LandingPage } from "../../pages";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/about" children={AboutPage} />
        <Route path="/" children={LandingPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
