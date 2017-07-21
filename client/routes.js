import * as React from 'react';

import App from './containers/App';
import Home from './components/Home';
import { Route } from 'react-router';

export default (
  <Route path="/">
    <Route path="/" component={ App } />
  </Route>
);
