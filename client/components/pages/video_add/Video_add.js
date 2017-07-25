import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import VideoAddForm from './Video_add_form'

class VideoAdd extends Component {
  handleFormSubmit({ url }) {
    // this.props.newVideo(url, new Date())
    console.log(this.youtube_parser(url))
    this.props.loadYoutubeVideoData(this.youtube_parser(url))
  }

  youtube_parser(url){
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
  }

  render() {
    if(this.props.videos.loadedVideoDetails) {
      console.log(this.props.videos.loadedVideoDetails.items[0].snippet)
    }
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
