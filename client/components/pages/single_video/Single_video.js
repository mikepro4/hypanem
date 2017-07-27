import React from 'react';
import { Button, Input } from "@blueprintjs/core";
import moment from 'moment';
import { browserHistory } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Person from '../../../components/common/person/Person';
import Player from '../../../containers/common/player/Player';

export default class SingleVideo extends React.Component {
  componentDidMount() {
    if(_.isEmpty(this.props.singleVideo)) {
      this.props.loadSingleVideo(this.props.match.params.id);
    }
  }
  render() {
    const { title, publishedAt, id } = this.props.singleVideo
    console.log(id)
    return (
      <div className="page-container page-single-video">
        <div className="single-video-main">
          <div className="single-video-container">

            <div className="single-video-header">
              <Button
                iconName="arrow-left"
                className="back-button pt-minimal"
                onClick={() => { this.props.history.go(-1)}}
              >
                Назад
              </Button>

              <div className="header-content">
                <div className="header-description">
                  <h1 className="video-title">{title}</h1>
                  <div className="video-metadata">
                    <ul className="video-main-details">
                      {this.props.videos.loadedChannelDetails ? <li className="single-detail detail-channel">
                        <Person person={this.props.videos.loadedChannelDetails.items[0]} />
                      </li>: "" }
                    </ul>
                  </div>
                </div>
                <Button
                  iconName="arrow-left"
                  className="button-red"
                >
                  Опубликовать Видео
                </Button>
              </div>
            </div>

            <div className="single-video-player">
              <Player
                width="100%"
                height="518"
                videoId={id}
              />
              <div className="video-player-timeline"> </div>
            </div>

          </div>
        </div>
        <div className="single-video-sidebar">sidebar</div>
      </div>
    );
  }
}