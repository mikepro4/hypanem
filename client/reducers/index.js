import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'
import appReducer from './app_reducer'
import authReducer from './auth_reducer'

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  loading: false,
  routing: routing,
  form: formReducer,
});

export default rootReducer;
