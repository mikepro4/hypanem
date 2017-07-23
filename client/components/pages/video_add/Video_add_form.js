import React, {PropTypes} from 'react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames'

import Input from '../../common/form/Input'

class VideoAddFormComponent extends React.Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} autoComplete="off" role="presentation" className="pt-dark pt-large pt-vertical">
        <input type="password" className="fake-input"/>
        <Field name="url"  component={ Input } label="Url" large={true} icon="link" ref="url" />
        <button action="submit" disabled={!this.props.valid} className='pt-button pt-intent-primary button_submit'>Add</button>
      </form>
    );
  }
}

const validate = values => {
  const errors = {}

  if (!values.url) {
    errors.url = 'Введи ';
  }

  return errors
}

export default reduxForm({
  form: 'addvideo',
  validate
})(VideoAddFormComponent);
