import * as React from 'react';
import { BrowserRouter as Router, Switch, withRouter } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';

const Home = React.lazy(() => import('../pages/Home'));
const About = React.lazy(() => import('../pages/About'));
const NotFound = () => <div>Pagina não encontrada</div>;

const Routes = () => (
  <Router>
    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <DefaultLayout exact path="/" component={withRouter(Home)} />
        <DefaultLayout path="/about" component={withRouter(About)} />
        <DefaultLayout component={withRouter(NotFound)} />
      </Switch>
    </React.Suspense>
  </Router>
);

export default Routes;
