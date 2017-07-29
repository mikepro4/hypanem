import React from 'react';
import { Button, Input, Spinner } from "@blueprintjs/core";
import moment from 'moment';
import { browserHistory } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import * as _ from 'lodash'
import Person from '../../../components/common/person/Person';
import Player from '../../../containers/common/player/Player';
import Timeline from '../../../containers/common/player/Timeline';
import PlayerControls from '../../../containers/common/player/Player_controls';
import { formatTime } from '../../../utils/time_formatter'

export default class SingleVideo extends React.Component {
  componentDidMount() {
    if(_.isEmpty(this.props.singleVideo)) {

      this.props.updatePlayerVideo(this.props.singleVideo.id, this.props.singleVideo.duration)

      this.props.loadSingleVideo(this.props.match.params.id, () => {
        this.props.updatePlayerVideo(this.props.singleVideo.id, this.props.singleVideo.duration)
      });
    }
  }

  componentDidUpdate(newState) {
    if(this.props.singleVideo.id != this.props.player.playingVideoId) {
      this.props.updatePlayerVideo(this.props.singleVideo.id, this.props.singleVideo.duration)
    }
  }

  componentWillUnmount() {
    this.props.resetVideo()
  }

  render() {
    if(_.isEmpty(this.props.singleVideo)) {
      return <div></div>
    }

    const { title, publishedAt, id, date } = this.props.singleVideo
    return (
      <div className="page-container page-single-video">
        <div className="single-video-main">
          <div className="single-video-container">

            <div className="single-video-header">
              <Button
                iconName="arrow-left"
                className="back-button pt-minimal"
                onClick={() => {
                    this.props.history.goBack()
                }}
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

                      {this.props.videos.loadedChannelDetails ? <li className="single-detail time-detail">
                        Добавлено {moment(date).fromNow()}
                      </li> : "" }
                    </ul>
                  </div>
                </div>
                <Button
                  iconName="cloud-upload"
                  className="green-button"
                >
                  Опубликовать Видео
                </Button>
              </div>
            </div>

            <div className="single-video-player">
              <Player
                width="100%"
                height="518"
              />

              <div className="video-player-timeline">

                <div className="player-time-controls">
                  <div className="player-controls-container">
                    <PlayerControls
                      player={this.props.player}
                    />
                  </div>
                  <div className="player-time-container">
                    {this.props.player ? <div>{formatTime(this.props.player.currentTime)} / {formatTime(Number(this.props.player.duration))}</div> : ""}
                  </div>
                </div>

                <div className="player-timeline">
                  <Timeline
                    player={this.props.player}
                  />
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className="single-video-sidebar"></div>
      </div>
    );
  }
}
