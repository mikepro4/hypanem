import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import VideoAddForm from './Video_add_form'

class VideoAdd extends Component {
  handleFormSubmit({ url }) {
    this.props.newVideo(url, new Date())
  }

  render() {
    return(
      <div>
        <Helmet title="Добавить Видео – Hype DNA" />
        Add
        <VideoAddForm onSubmit={this.handleFormSubmit.bind(this)} />
        </div>
      );
  }
}

export default VideoAdd;
