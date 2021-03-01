import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./modules/Books/Books";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Books />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
