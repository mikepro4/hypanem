import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

class PublishedVideos extends Component {
  render() {
    return(
        <div className="content-container">
          <Helmet title="Тренды – Hype DNA" />
            Published
        </div>
      );
  }
}

export default PublishedVideos;
