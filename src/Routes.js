import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { Suspense } from "react/cjs/react.production.min";

//Components
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Sales from "./components/pages/Sales/Sales";
import Spinner from "./components/ui/Spinner/Spinner";
// import Users from "./components/pages/Users/Users";
const Users = lazy(() => import("./components/pages/Users/Users"));

const Routes = (props) => {
   return (
      <Suspense fallback={Spinner}>
         <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/sales' component={Sales} />
            <Route exact path='/users' component={Users} />
         </Switch>
      </Suspense>
   );
};
export default Routes;
