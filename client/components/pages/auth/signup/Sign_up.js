import React, {PropTypes} from 'react';
import { NavLink } from 'react-router-dom'
import Helmet from 'react-helmet';
import classnames from 'classnames'
import SignUpForm from './Sign_up_form'
import { Position, Toaster, Classes, Intent } from "@blueprintjs/core";

export default class SignUp extends React.Component {
  handleFormSubmit({ email, password, username }) {
    this.props.signUpAction(this, { email, password, username })
  }

  showError(reason) {
    this.refs.toaster.show({
      message: reason,
      intent: Intent.DANGER
    });
  }

  renderAlert() {
    if (this.props.auth.error) {
      return (
        <span>
          {this.props.auth.error}
        </span>
      );
    }
  }

  render() {
    let errorClass = classnames({
      'form_error': true,
      'show': this.props.auth.error
    });

    return (
      <div className="page-container page-signup">
        <Toaster position={Position.CENTER} ref="toaster" />
        <Helmet title="Регистрация – Hype DNA" />
        <div className="form-container">

          <div className='form-top-section'>
            <h1 className='form-title'>Регистрация</h1>
            <div className={errorClass}>{this.renderAlert()}</div>
          </div>

          <SignUpForm errorMessage={this.props.auth.error} onSubmit={this.handleFormSubmit.bind(this)} />

          <div className='footer_link'>
            <span>Уже есть аккаунт? –</span>
            <NavLink to='/auth/signin' className='button button-small'> Войти </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
