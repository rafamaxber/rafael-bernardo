import * as React from 'react';
import { Route } from 'react-router-dom';
import { NavBar } from '../../components/NavBar'

interface IDefaultLayoutProps {
  component: React.ComponentType<*>
};

export default ({ component: Component, ...rest }: IDefaultLayoutProps) => (
  <Route
    {...rest}
    render={matchProps => (
      <React.Fragment>
        <NavBar />
        <Component {...matchProps} />
      </React.Fragment>
    )}
  />
);
