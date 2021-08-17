import React, {Suspense} from "react";
import HomeContainer from "../components/home/container/HomeContainer";
import { Route, Switch } from "react-router-dom";

const Routes = () => {
  const PrivateRoute = ({ ...props }) => {
    return <Route {...props} />;
  };

  return (
    <Suspense>
      <Switch>
        <PrivateRoute path="/home" component={HomeContainer}></PrivateRoute>
      </Switch>
    </Suspense>
  );
};

export default Routes;
