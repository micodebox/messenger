import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact render={() => <></>} />
      <Redirect to="/" />
    </Switch>
  );
};
