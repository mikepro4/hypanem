import React, {PropTypes} from 'react';
import { NavLink } from 'react-router-dom'
import Helmet from 'react-helmet';
// import { signinUser } from '../../../actions/auth_actions'
import classnames from 'classnames'
import SignInForm from './Sign_in_form'

export default class SignIn extends React.Component {
  handleFormSubmit({ email, password }) {
    console.log('submit')
    // this.props.dispatch(signinUser({ email, password }))
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
      <div className="page-container page-signin">
        <Helmet title="Hype DNA – Войти" />
        <div className="form-container">

          <div className='form-top-section'>
            <h1 className='form-title'>Войти</h1>
            <div className={errorClass}>{this.renderAlert()}</div>
          </div>

          <SignInForm errorMessage={this.props.auth.error} onSubmit={this.handleFormSubmit.bind(this)} />

          <div className='footer_link'>
            <span>Еще нет аккаунта? –</span>
            <NavLink to='/auth/signup' className='button button-small'> Зарегистрироваться </NavLink>
          </div>
        </div>
      </div>
    );
  }
}
