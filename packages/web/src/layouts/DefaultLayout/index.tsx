import * as React from 'react';
import { Route } from 'react-router-dom';
import { RouteProps } from 'react-router';

import { NavBar } from '@rafab/components'

interface IDefaultLayoutProps {
  component: React.ComponentType,
};

export default ({ component: Component, ...rest }: IDefaultLayoutProps & RouteProps) => (
  <Route
    {...rest}
    render={matchProps => (
      <React.Fragment>
        <NavBar/>
        <Component {...matchProps} />
      </React.Fragment>
    )}
  />
);
