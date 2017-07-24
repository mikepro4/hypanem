import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

class AwaitingSingleVideo extends Component {
  componentDidMount() {
    this.props.loadVideo(this.props.match.params.id);
  }

  render() {
    console.log(this.props.singleVideo)
    return(
        <div className="content-container">
          <Helmet title="Тренды – Hype DNA" />
            {this.props.match.params.id}
            {this.props.singleVideo ? this.props.singleVideo.url : ""}
        </div>
      );
  }
}

export default AwaitingSingleVideo;
