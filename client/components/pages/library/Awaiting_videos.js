import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import { Button, Input } from "@blueprintjs/core";
import { NavLink } from 'react-router-dom';

class AwaitingVideos extends Component {

  handleDetails(id) {
    this.props.loadSingleVideo(id)
    // this.props.history.push('/library/video/awaiting/' + id)
  }

  handleDelete(id) {
    this.props.deleteVideoFactory(id)
  }

  renderVideoList() {
    return this.props.videos.items.map((video, i) => {
      return (
         <li className="video-list-item" key={i}>
            <div className="video-details">
              <div className="video-avatar">
                <img src={`https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`}/>
              </div>
              <div className="video-description">
                <div className="video-title"  onClick={() => this.handleDetails(video._id)}>{video.title}</div>
                <NavLink to={"/person/" + video.channelId} className="channel-title">
                  {video.channelTitle}
                </NavLink>
              </div>
            </div>
            <ul className="video-actions">
              <li className="video-single-action">
                <Button
                  className="pt-minimal"
                  iconName="trash"
                  onClick={() => this.handleDelete(video._id)}
                ></Button>
              </li>
              <li className="video-single-action">
                <Button
                  className="pt-minimal"
                  iconName="export"
                ></Button>
              </li>
              <li className="video-single-action">
                <Button
                  iconName="arrow-right"
                  onClick={() => this.handleDetails(video._id)}
                ></Button>
              </li>
            </ul>
         </li>
       );
    });
  }

  render() {
    const videoCount = this.props.videos.items.length
    return(
      <div className="content-container">
        <Helmet title="Тренды – Hype DNA" />
          <h3 className="section-title">{videoCount} видео готовы к публикации:</h3>
          <ul className="video-list">
            {this.renderVideoList()}
          </ul>
        </div>
      );
  }
}

export default AwaitingVideos;
