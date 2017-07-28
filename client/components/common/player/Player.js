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
    this.setState({
      player: event.target
    });
  }

  onStateChange(event) {
    clearInterval(this.state.timeInterval);
  }

  componentDidUpdate(event) {
    switch(this.props.player.status) {
      case 'play':
        return this.playVideo()
      case 'pause':
        return this.pauseVideo()
      case 'stop':
        return this.stopVideo()
      case 'seek':
        return this.seekVideo()
    }
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
    console.log('onPlay')
    this.setState({ 'timeInterval': null })
    this.props.updatePlayerStatus('playing')
    this.startTimeInterval()
  }

  onPause(event) {
    console.log('onPause')
    clearInterval(this.state.timeInterval);
    this.props.updatePlayerStatus('paused')
  }

  startTimeInterval() {
    const timeInterval = setInterval(() => {
      this.props.updateTime(this.state.player.getCurrentTime())
    }, 100)

    this.setState({timeInterval})
  }

  componentWillMount() {
    clearInterval(this.state.timeInterval);
  }

  componentWillUnmount(){
    clearInterval(this.state.timeInterval);
    this.props.updatePlayerStatus('cleared');
  }

  clearTime() {
    this.props.dispatch(0)
  }


  onStop() {
    this.props.dispatch(0)
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
      'video-loaded': this.props.player.playingVideoId
    })

    console.log(this.props)

    return (
      <div className={videoClasses}>
       <YouTube
          videoId={this.props.player.playingVideoId}
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
