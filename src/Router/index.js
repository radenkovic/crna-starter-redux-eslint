import React from 'react';
import { Route } from 'react-router-dom';
import IndexPage from 'Pages/index';
import DashboardPage from 'Pages/Dashboard';

import routes from './routes';

const Router = () => (
  <>
    <Route exact path={routes.get('index')} component={IndexPage} />
    <Route exact path={routes.get('dashboard')} component={DashboardPage} />
  </>
);
export default Router;
