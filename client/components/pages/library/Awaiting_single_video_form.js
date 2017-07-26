import React, {PropTypes} from 'react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames'

import Input from '../../common/form/Input'

class AwaitingSingleVideoFormComponent extends React.Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} autoComplete="off" role="presentation" className="pt-dark pt-large pt-vertical">
        <input type="password" className="fake-input"/>
        <Field name="id" component={ Input } label="Id" large={true} ref="id" />
        <button action="submit" disabled={!this.props.valid} className='pt-button pt-intent-primary button_submit'>Обновить</button>
      </form>
    );
  }
}

const validate = values => {
  const errors = {}

  if (!values.id) {
    errors.id = 'Введи ';
  }

  return errors
}

export default reduxForm({
  form: 'awaitingSingleVideo',
  validate
})(AwaitingSingleVideoFormComponent);
