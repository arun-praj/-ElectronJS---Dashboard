import React, { lazy } from "react";
import { Switch, Route } from "react-router-dom";
import { Suspense } from "react/cjs/react.production.min";

//Components
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Sales from "./components/pages/Sales/Sales";
import Spinner from "./components/ui/Spinner/Spinner";
import Products from "./components/pages/Products/Products";
import Users from "./components/pages/Users/Users";
// import Users from "./components/pages/Users/Users";
// const Users = lazy(() => import("./components/pages/Users/Users"));
// const Products = lazy(() => import("./components/pages/Products/Products"));

const Routes = ({ products, setProducts }) => {
   return (
      <Suspense fallback={Spinner}>
         <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route exact path='/sales' component={Sales} />
            <Route exact path='/users' component={Users} />
            <Route
               exact
               path='/products'
               render={(props) => (
                  <Products {...props} products={products} setProducts={setProducts} />
               )}
            />
         </Switch>
      </Suspense>
   );
};
export default Routes;
