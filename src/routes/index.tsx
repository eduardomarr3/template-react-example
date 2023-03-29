import React from 'react';
import { observer } from 'mobx-react';
import { Route, Routes as Switch } from 'react-router-dom';
import { Demo, Home, Login, NotFound } from '~/scenes';
import Navigator from './Navigator';
import PrivateRoute from './PrivateRoute';
import { Routes } from './routing';

const RoutesContainer: React.FC = () => (
  <Switch>
    <Route
      path={Routes.HOME}
      element={
        <PrivateRoute>
          <Home />
        </PrivateRoute>
      }
    />
    <Route
      path={Routes.DEMO}
      element={
        <PrivateRoute>
          <Demo />
        </PrivateRoute>
      }
    />
    <Route path={Routes.LOGIN} element={<Login />} />
    <Route path={Routes.NOT_FOUND} element={<NotFound />} />
  </Switch>
);

export { Navigator, Routes };
export default observer(RoutesContainer);
