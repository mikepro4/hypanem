import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import * as _ from 'lodash'
import AwaitingSingleVideoFormComponent from './Awaiting_single_video_form';

class AwaitingSingleVideo extends Component {
  componentDidMount() {
    this.props.testMethod(this.props.match.params.id)
  }


  handleFormSubmit({url}) {
    this.props.updateVideo(url, this.props.match.params.id)
    this.props.history.push('/library/video/awaiting/')
  }

  render() {

    let myInitialValues = {
      initialValues: {
        url: this.props.singleVideo.url
      }
    }

    return(
        <div className="content-container">
          <Helmet title="Тренды – Hype DNA" />
          <h3 className="section-title">Single Video</h3>
          <AwaitingSingleVideoFormComponent
            {...myInitialValues}
            enableReinitialize={true}
            onSubmit={this.handleFormSubmit.bind(this)}
          />
        </div>
      );

  }
}

export default AwaitingSingleVideo;
