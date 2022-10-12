import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import Login from 'containers/Login';
import Page404 from 'components/404';
import { ROUTE } from 'utils/constants';

export default function Router() {
  return (
    <>
      <Switch>
        <Route exact path={ROUTE.home} component={HomePage} />
        <Route exact path={ROUTE.login} component={Login} />
        <Route component={Page404} />
      </Switch>
    </>
  );
}
