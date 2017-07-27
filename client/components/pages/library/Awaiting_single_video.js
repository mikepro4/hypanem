import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import * as _ from 'lodash'
import AwaitingSingleVideoFormComponent from './Awaiting_single_video_form';

class AwaitingSingleVideo extends Component {
  componentDidMount() {
    this.props.loadSingleVideo(this.props.match.params.id)
  }

  handleFormSubmit({id}) {
    this.props.updateVideo({}, this.props.match.params.id)
    this.props.history.push('/library/video/awaiting/')
  }

  render() {
    let myInitialValues = {
      initialValues: {
        id: this.props.singleVideo.id
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
