import React from "react";
import { Switch, Route } from "react-router-dom";

//Components
import Dashboard from "./components/pages/Dashboard/Dashboard";
const Routes = (props) => {
   return (
      <Switch>
         <Route exact path='/' component={Dashboard} />
      </Switch>
   );
};
export default Routes;
