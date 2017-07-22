import * as React from 'react';
import { Route } from 'react-router';

import App from './containers/pages/app/App';

export default (
  <Route path="/">
    <Route path="/" component={ App } />
  </Route>
);
