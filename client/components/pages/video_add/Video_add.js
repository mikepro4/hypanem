import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
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
    if(this.props.videos.loadedVideoDetails) {
      console.log(this.props.videos.loadedVideoDetails.items[0].snippet)
    }
    if(this.props.form.addvideo && this.props.form.addvideo.values) {
      renderVideoContainer = this.youtube_parser(this.props.form.addvideo.values.url)
    }

    if(!this.props.form.addvideo && this.props.videos.loadedVideoDetails) {
      this.props.clearLoadedVideo()
    }

    return(
      <div>
        <Helmet title="Добавить Видео – Hype DNA" />
          Add
          <VideoAddForm onSubmit={this.handleFormSubmit.bind(this)} onChange={(values) => {
            if(this.youtube_parser(values.url)){
              this.handleFormSubmit({url: values.url })
            } else {
              this.props.clearLoadedVideo()
            }
          }} />
          <div onClick={() => {this.props.reset('addvideo')}}>reset form</div>
          {renderVideoContainer ? "render": ""}


          {this.props.videos.loadedVideoDetails ? <div className="">
            <Player />
            </div> : ""
        }

        </div>
      );
  }
}

export default VideoAdd;
