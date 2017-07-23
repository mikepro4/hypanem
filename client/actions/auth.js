import actionTypeBuilder from './actionTypeBuilder';
import { push } from 'react-router-redux'
import { Accounts } from 'meteor/accounts-base'

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

export function loginWithPassword(email, password) {
  return dispatch => {
    Meteor.loginWithPassword(email, password, err => {
      if (err) {
        // return dispatch();
        console.log('fail')
      }

      return dispatch(push('/home'));
    });
  };
}

export function signUpAction({email, password, username}) {
  return dispatch => {
    Accounts.createUser({email, password, username }, err => {
      if (err) {
        console.log(err)
        console.log('fail')
        return
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
