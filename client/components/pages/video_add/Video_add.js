import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import commaNumber from 'comma-number'
import moment from 'moment';
import 'moment/locale/ru';
import VideoAddForm from './Video_add_form'
import Player from '../../../containers/common/player/Player'

class VideoAdd extends Component {
  handleFormSubmit({ url }) {
    // this.props.newVideo(url, new Date())
    console.log(this.youtube_parser(url))
    if(this.youtube_parser(url)){
      this.props.loadYoutubeVideoData(this.youtube_parser(url))
    }
  }

  youtube_parser(url){
    if(url) {
      const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
      const match = url.match(regExp);
      return (match&&match[7].length==11)? match[7] : false;
    }
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
                  />

                  <div className="video-description">
                    <h2 className="video-title">{this.props.videos.loadedVideoDetails.items[0].snippet.title}</h2>
                    <div className="video-metadata">
                      <ul className="video-main-details">
                        {this.props.videos.loadedChannelDetails ? <li className="single-detail detail-channel">
                          <div className="channel-avatar">
                             <img src={this.props.videos.loadedChannelDetails.items[0].snippet.thumbnails.default.url}/>
                          </div>
                          <div className="metadata-value">{this.props.videos.loadedChannelDetails.items[0].snippet.title}</div>
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
                <div className="loaded-video-info-area">bla</div>
              </div> : ""
            }
          </div>

        </div>
      );
  }
}

export default VideoAdd;
