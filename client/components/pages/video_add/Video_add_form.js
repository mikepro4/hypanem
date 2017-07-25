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
        <Field name="url" component={ Input } label="Вставить ссылку на Youtube видео..." large={true} ref="url" />
        <button action="submit" disabled={!this.props.valid} className='pt-button pt-intent-primary button_submit'>Add</button>
      </form>
    );
  }
}

function youtube_parser(url){
  if(url) {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
  }
}

const validate = values => {
  const errors = {}

  if (!values.url) {
    errors.url = 'Введи ';
  }

  if(!youtube_parser(values.url)) {
    errors.url = 'Неправильная адрес видоса ';
  }

  return errors
}

export default reduxForm({
  form: 'addvideo',
  validate
})(VideoAddFormComponent);
