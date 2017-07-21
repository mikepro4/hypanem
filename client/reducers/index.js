import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import appReducer from './app_reducer'

const rootReducer = combineReducers({
  app: appReducer,
  routing: routing,
});

export default rootReducer;
