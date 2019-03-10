import * as React from 'react';
import { BrowserRouter as Router, Switch, withRouter } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';

const Suspense = (React as any).Suspense;
const lazy = (React as any).lazy;

const Home = lazy(() => import('../pages/Home'));
const About = lazy(() => import('../pages/About'));
const NotFound = () => <div>Pagina não encontrada</div>;

const Routes = () => (
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <DefaultLayout exact path="/" component={Home} />
        <DefaultLayout path="/about" component={About} />
        <DefaultLayout component={NotFound} />
      </Switch>
    </Suspense>
  </Router>
);

export default Routes;
