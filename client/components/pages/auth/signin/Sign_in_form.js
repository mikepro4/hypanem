import React, {PropTypes} from 'react';
import { NavLink } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames'

import Input from '../../../common/form/Input'

class SignInForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className="pt-control-group pt-large pt-vertical">
        <Field name="email"  component={ Input } label="Email" large={true} icon="envelope" ref="email" />
        <Field name="password"  component={ Input } label="Пароль" large={true} icon="lock" />
        <button action="submit" disabled={!this.props.valid} className='pt-button pt-intent-primary button_submit'>Войти</button>
      </form>
    );
  }
}

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Email is required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  if (!values.password) {
    errors.password = 'Please enter a password';
  }

  return errors
}

export default reduxForm({
  form: 'signin',
  validate
})(SignInForm);
