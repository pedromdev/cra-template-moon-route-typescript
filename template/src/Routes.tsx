import React from 'react';
import {Route, Switch} from "react-router-dom";
import Home from "./pages/Home";

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/">
        <Home/>
      </Route>
    </Switch>
  );
};

export default Routes;
