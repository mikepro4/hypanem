import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import commaNumber from 'comma-number'
import moment from 'moment';
import 'moment/locale/ru';
import { Button, Intent } from "@blueprintjs/core";
import { NavLink } from 'react-router-dom';
import VideoAddForm from './Video_add_form'
import Player from '../../../containers/common/player/Player'
import Person from '../../../components/common/person/Person'
import _ from 'lodash';

class VideoAdd extends Component {
  handleFormSubmit({ url }) {
    console.log(this.youtube_parser(url))
    if(this.youtube_parser(url)){
      this.props.loadYoutubeVideoData(this.youtube_parser(url), () => {
        this.props.updatePlayerVideo(this.props.singleVideo.id, moment.duration(this.props.singleVideo.contentDetails.duration).asSeconds())
      })
    }
  }

  youtube_parser(url){
    if(url) {
      const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
      const match = url.match(regExp);
      return (match&&match[7].length==11)? match[7] : false;
    }
  }

  addVideo() {
    const {categoryId, channelId, channelTitle, publishedAt, thumbnails, title } = this.props.videos.loadedVideoDetails.items[0].snippet;
    const newVideo = {
      id: this.props.videos.loadedVideoDetails.items[0].id,
      duration: moment.duration(this.props.videos.loadedVideoDetails.items[0].contentDetails.duration).asSeconds(),
      categoryId: categoryId,
      channelId: channelId,
      publishedAt: publishedAt,
      title: title,
      date: new Date(),
      channelTitle: channelTitle
    }
    this.props.newVideo(newVideo);
  }

  render() {
    let renderVideoContainer = false;
    if(this.props.form.addvideo && this.props.form.addvideo.values) {
      renderVideoContainer = this.youtube_parser(this.props.form.addvideo.values.url)
    }

    if(!this.props.form.addvideo && this.props.videos.loadedVideoDetails) {
      this.props.clearLoadedVideo()
      this.props.clearLoadedChannel()
    }

    const format = commaNumber.bindWith(',', '.');
    moment.locale('ru');

    return(
      <div className="page-video-add">
        <Helmet title="Добавить Видео – Hype DNA" />

          <div className="video-add-content">

            <div className="video-add-form">

              <h1 className="video-add-form-title">ДОБАВИТЬ ВИДЕО</h1>

              <VideoAddForm onSubmit={this.handleFormSubmit.bind(this)} onChange={(values) => {
                if(this.youtube_parser(values.url)){
                  this.props.clearLoadedVideo()
                  this.props.clearLoadedChannel()
                  this.handleFormSubmit({url: values.url })
                } else {
                  this.props.clearLoadedVideo()
                  this.props.clearLoadedChannel()
                }
              }} />

              {this.props.form.addvideo && this.props.form.addvideo.values ? <div className="clear-button" onClick={() => {this.props.reset('addvideo')}}>
                <svg width="24px" height="23px" viewBox="0 0 24 23" version="1.1">
                    <g id="hype" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Artboard-3-Copy-6" transform="translate(-1228.000000, -189.000000)" fillRule="nonzero" fill="#FFFFFF">
                            <path d="M1240,201.707107 L1250.24265,211.949754 L1250.94975,211.242647 L1240.70711,201 L1251.25013,190.456977 L1250.54302,189.74987 L1240,200.292893 L1229.45698,189.74987 L1228.74987,190.456977 L1239.29289,201 L1229.05025,211.242647 L1229.75735,211.949754 L1240,201.707107 Z" id="Combined-Shape"></path>
                        </g>
                    </g>
                </svg>
              </div> : ""}

            </div>

            {renderVideoContainer ? "": ""}

            {this.props.videos.loadedVideoDetails ? <div className="loaded-video-container">
                <div className="loaded-video-player-area">
                  <Player
                    width="680"
                    height="380"
                    videoId={this.props.videos.loadedVideoDetails.items[0].id}
                  />

                  <div className="video-description">
                    <h2 className="video-title">{this.props.videos.loadedVideoDetails.items[0].snippet.title}</h2>
                    <div className="video-metadata">
                      <ul className="video-main-details">
                        {this.props.videos.loadedChannelDetails ? <li className="single-detail detail-channel">
                          <Person person={this.props.videos.loadedChannelDetails.items[0]} />
                        </li>: "" }

                        <li>{format(this.props.videos.loadedVideoDetails.items[0].statistics.viewCount)} просмотров</li>
                        <li>{moment(this.props.videos.loadedVideoDetails.items[0].snippet.publishedAt).fromNow()}</li>
                      </ul>

                      <ul className="video-stats">
                        <li className="single-stat">
                          <span className="pt-icon pt-icon-thumbs-up"/>
                          {format(this.props.videos.loadedVideoDetails.items[0].statistics.likeCount)}
                        </li>
                        <li className="single-stat">
                          <span className="pt-icon pt-icon-thumbs-down"/>
                          {format(this.props.videos.loadedVideoDetails.items[0].statistics.dislikeCount)}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="loaded-video-info-area">
                  <h1 className="video-info-area-title">
                    После того, как видео будет добавлено, ты сможешь:
                  </h1>

                  <ul className="video-info-area-list">
                    <li>Аннотировать интересные моменты</li>
                    <li>Выссказывать свое мнение о событиях и людях в роликах</li>
                    <li>Отмечать упомянания людей и диссы</li>
                    <li>Создавать мемы</li>
                  </ul>

                  <Button
                    iconName="add"
                    className="green-button"
                    onClick={this.addVideo.bind(this)}
                  >
                    Добавить Видео
                  </Button>

                  <p>
                    Видео будет добавлено в <NavLink to="/library/video/awaiting/">Мой Контент</NavLink>
                  </p>
                </div>

              </div> : ""
            }
          </div>

        </div>
      );
  }
}

export default VideoAdd;
