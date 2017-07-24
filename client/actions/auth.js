import actionTypeBuilder from './actionTypeBuilder';
import { push } from 'react-router-redux'
import { Accounts } from 'meteor/accounts-base'
import { loadVideosFactory } from './videos';

export const USER_LOGGING_IN = actionTypeBuilder.type('USER_LOGGING_IN');
export const USER_DATA = actionTypeBuilder.type('USER_DATA');

export function loadUser() {
  return dispatch => {
    dispatch({
      type: USER_LOGGING_IN,
      meteor: {
        get: () => Meteor.loggingIn(),
      },
    });

    dispatch({
      type: USER_DATA,
      meteor: {
        subscribe: () => Meteor.subscribe('userData'),
        get: () => Meteor.user(),
      },
    });

  };
}

export function loginWithPassword(component, {email, password}) {
  return dispatch => {
    Meteor.loginWithPassword(email, password, err => {
      if (err) {
        component.showError(err.reason);
        return;
      }

      loadVideosFactory()


      return dispatch(push('/home'));
    });
  };
}

export function signUpAction(component, {email, password, username}) {
  return dispatch => {
    Accounts.createUser({email, password, username }, err => {
      if (err) {
        component.showError(err.reason);
        return;
      }
      return dispatch(push('/home'));
    });
  };
}

export function logout() {
  return dispatch => {
    Meteor.logout(err => {
      if (err) {
        return
      }

      dispatch(push('/'));
    });
  };
}
