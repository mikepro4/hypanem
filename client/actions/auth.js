import { push } from 'react-router-redux'
import { Accounts } from 'meteor/accounts-base'

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
