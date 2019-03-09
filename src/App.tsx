import * as React from 'react';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import Routes from './routes';

const App = () => <Routes />;

export default App;
