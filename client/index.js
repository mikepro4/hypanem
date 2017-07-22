import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import { applyMiddleware, createStore, compose } from 'redux';
import { createLogger } from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';

import rootReducer from './reducers/index';
import DevTools from './components/DevTools';
import Routes from './routes'

const logger = createLogger();
const history = createBrowserHistory();
const middleware = routerMiddleware(history);

const enhancers = [
  applyMiddleware(middleware, ReduxThunk, logger),
  DevTools.instrument()
];

const store = createStore(rootReducer, {}, compose(...enhancers));

Meteor.startup(() => {
  render(
    <Provider store={store} key="provider">
      <ConnectedRouter
        history={ history }
        children={ Routes }
      />
    </Provider>,
    document.getElementById('app')
  );
});
