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

import meteorDatasource from './middlewares/meteorDatasource';
import meteorSubscription from './middlewares/meteorSubscription';
import meteorMethod from './middlewares/meteorMethod';
import { meteorInsert, meteorUpdate, meteorRemove } from './middlewares/meteorCrud';

import { newSuccessNotification, newErrorNotification } from './actions/notifications';

import { loadUser } from './actions/auth';

const logger = createLogger();
const history = createBrowserHistory();
const middleware = routerMiddleware(history);

const enhancers = [
  applyMiddleware(middleware, ReduxThunk, logger,
    meteorSubscription,
    meteorDatasource,
    meteorMethod(newSuccessNotification, newErrorNotification),
    meteorInsert(newSuccessNotification, newErrorNotification),
    meteorUpdate(newSuccessNotification, newErrorNotification),
    meteorRemove(newSuccessNotification, newErrorNotification)
  ),
  DevTools.instrument()
];

const store = createStore(rootReducer, {}, compose(...enhancers));
store.dispatch(loadUser());

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
