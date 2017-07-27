import React, {PropTypes} from 'react';
import YouTube from 'react-youtube';
import classnames from 'classnames'
import axios from 'axios'
import moment from 'moment'

export default class YoutubePlayer extends React.Component {
  constructor(props) {
   super(props);

   this.state = {
     player: null,
     timeInterval: null
   }
  }

  onReady(event) {
  }

  onStateChange(event) {
  }

  componentDidUpdate(event) {
  }

  playPauseSwitch() {
  }

  seekToClip() {
  }

  playVideo() {
  }

  pauseVideo() {
  }

  stopVideo() {
  }

  seekVideo() {
  }

  onPlay(event) {
  }

  onPause(event) {
  }

  startTimeInterval() {
  }

  componentWillMount() {
  }

  componentWillUnmount(){
  }

  clearTime() {
  }


  onStop() {
  }

  render() {
    const videoPlayerOptions = {
      height: this.props.height ? this.props.height : '170',
      width: this.props.width ? this.props.width : '270',
      playerVars: {
        controls: 1,
        showinfo: 0,
        modestbranding: 1
      }
    };

    let videoClasses = classnames({
      'video-container': true,
      'video-loaded': this.props.videoId
    })

    console.log(this.props)

    return (
      <div className={videoClasses}>
       <YouTube
          videoId={this.props.videoId}
          opts={videoPlayerOptions}
          onReady={this.onReady.bind(this)}
          onPlay={this.onPlay.bind(this)}
          onStop={this.onStop.bind(this)}
          onPause={this.onPause.bind(this)}
          onStateChange={this.onStateChange.bind(this)}
        />
      </div>
    )
  }
}
