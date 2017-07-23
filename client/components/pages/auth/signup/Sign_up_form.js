import React, {PropTypes} from 'react';
import { NavLink } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames'

import Input from '../../../common/form/Input'

class SignUpForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className="pt-dark pt-control-group pt-large pt-vertical">
        <Field name="username"  component={ Input } label="Username" large={true} icon="user" ref="username" />
        <Field name="email"  component={ Input } label="Email" large={true} icon="envelope" ref="email" />
        <Field name="password"  component={ Input } label="Пароль" type="password" large={true} icon="lock" />
        <Field name="passwordConfirm"  component={ Input } label="Подтвердить пароль" type="password"  large={true} icon="lock" />
        <button action="submit" disabled={!this.props.valid} className='pt-button pt-intent-primary button_submit'>Зарегистрироваться</button>
      </form>
    );
  }
}

const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.email = 'Введи email'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Неравильный email адрес'
  }

  if (!values.username) {
    errors.username = 'Введи имя';
  }

  if (!values.password) {
    errors.password = 'Введи пароль';
  }

  if (values.password !== values.passwordConfirm) {
    errors.password = 'введенные пароли не совпадают';
  }

  return errors
}

export default reduxForm({
  form: 'signup',
  validate
})(SignUpForm);
