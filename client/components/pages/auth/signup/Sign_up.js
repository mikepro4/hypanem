import React, {PropTypes} from 'react';
import { NavLink } from 'react-router-dom'
import Helmet from 'react-helmet';
// import { signinUser } from '../../../actions/auth_actions'
import classnames from 'classnames'
import SignUpForm from './Sign_up_form'

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
      <div className="page-container page-signup">
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
