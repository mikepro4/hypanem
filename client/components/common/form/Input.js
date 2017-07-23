import React, {PropTypes} from 'react';
import { NavLink } from 'react-router-dom'
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames'

const Input = ({ input, label, icon, large, type, meta: { touched, error } }) => {
  let containerClassName = classnames({
    'pt-input-group ': true,
    'pt-large': large,
    'form-valid': touched && !error,
    'form-invalid': touched && error
  })

  let inputClassName = classnames({
    'pt-input': true,
    'pt-intent-success': touched && !error,
    'pt-intent-danger': touched && error
  })
  return (
    <div className={containerClassName}>
        {icon ? <span className={`pt-icon pt-icon-${icon}`} /> : "" }

        <input {...input} className={ inputClassName } placeholder={label} type={type}/>
        {touched && error ? <div className='input_error'>{touched && error && <span>{error}</span>}</div> : ""}
        { touched && !error ? <div className='input_valid'>
          <span className="pt-icon pt-icon-small-tick"/>
        </div> : "" }
    </div>
  )
}

export default Input
