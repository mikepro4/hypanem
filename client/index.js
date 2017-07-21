import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createBrowserHistory } from 'history'
import { applyMiddleware, createStore, compose } from 'redux';
import createLogger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers/index';
import DevTools from './components/DevTools';

import Routes from './routes'

import { syncHistoryWithStore } from 'react-router-redux';
const logger = createLogger();

const enhancers = [
  applyMiddleware(ReduxThunk, logger),
  DevTools.instrument()
];

const Store = createStore(rootReducer, {}, compose(...enhancers));
const history = syncHistoryWithStore(createBrowserHistory(), Store);


Meteor.startup(() => {
  render(
    <Provider store={Store} key="provider">
      <Router history={ history } children={ Routes }  />
    </Provider>,
    document.getElementById('app')
  );
});
