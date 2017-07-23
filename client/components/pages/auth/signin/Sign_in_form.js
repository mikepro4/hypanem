import React, {PropTypes} from 'react';
import { NavLink } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames'

import Input from '../../../common/form/Input'

class SignInForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} autoComplete="off" role="presentation" className="pt-dark pt-control-group pt-large pt-vertical">
        <input type="password" className="fake-input"/>

        <Field name="email"  component={ Input } label="Email" large={true} icon="envelope" ref="email" />
        <Field name="password"  component={ Input } label="Пароль" type="password"  large={true} icon="lock" />
        <button action="submit" disabled={!this.props.valid} className='pt-button pt-intent-primary button_submit'>Войти</button>
      </form>
    );
  }
}

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Введи  email'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Неравильный email адрес'
  }

  if (!values.password) {
    errors.password = 'Введи пароль';
  }

  return errors
}

export default reduxForm({
  form: 'signin',
  validate
})(SignInForm);
