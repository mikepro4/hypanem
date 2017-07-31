import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form'
import appReducer from './app_reducer'
import authReducer from './auth_reducer'
import videosReducer from './videos_reducer'
import notification from './notifications';
import player from './player';
import time from './time';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  loading: false,
  routing: routing,
  form: formReducer,
  videos: videosReducer,
  player: player,
  time: time,
  notification
});

export default rootReducer;
