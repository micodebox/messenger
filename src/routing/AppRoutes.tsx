import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Dashboard as DashboardTemplate } from 'components/templates';
import { DashboardContainer } from 'app/dashboard/DashboardContainer';

import { AppRoute } from './AppRoute.enum';

export const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/">
        {() => (
          <DashboardTemplate>
            <Switch>
              <Route exact path={AppRoute.home} render={() => <DashboardContainer />} />
            </Switch>
          </DashboardTemplate>
        )}
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
