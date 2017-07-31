import React, {PropTypes} from 'react';
import _ from 'lodash'
import classNames from 'classnames'
import { formatTime } from '../../../utils/time_formatter'

export default class Timeline extends React.Component {
  constructor(props) {
   super(props);

   this.state = {
     times: [],
   }
  }

  handleResize = () => {
    this.forceUpdate();
  };

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
    setTimeout(() => {
      this.forceUpdate()
    }, 1)

    const timeArray = this.getTimeline();

    let times = []

    if(!_.isEmpty(timeArray)) {
      this.setState({
        times: timeArray.map((time,i) => {
          return (
            <li className='time' key={i}>
              <span>{formatTime(time)}</span>
            </li>
          )
        })
      })
    }
  }

  componentDidUpdate(newState) {
    console.log(newState)
    if(this.props.player) {
      if(this.props.player.playingVideoId !== newState.player.playingVideoId) {
        console.log('lol')
        const timeArray = this.getTimeline();

        let times = []

        if(!_.isEmpty(timeArray)) {
          this.setState({
            times: timeArray.map((time,i) => {
              return (
                <li className='time' key={i}>
                  <span>{formatTime(time)}</span>
                </li>
              )
            })
          })
        }
      }
    } else {
      const timeArray = this.getTimeline();

      let times = []

      if(!_.isEmpty(timeArray)) {
        this.setState({
          times: timeArray.map((time,i) => {
            return (
              <li className="time" key={i}>
                <span>{formatTime(time)}</span>
              </li>
            )
          })
        })
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  getTimeline() {
    if(this.refs.timeline) {
      const containerWIdth = this.refs.timeline.getBoundingClientRect().width
      // console.log(containerWIdth)
      const timesAmount = (containerWIdth/35/2)
      const timeInterval = Number(this.props.player.duration / timesAmount).toFixed(0)

      const secondsArray = Array.apply(null, {length: this.props.player.duration}).map(Number.call, Number)

      const filteredSeconds = _.filter(secondsArray, (number) => {
        return((number % timeInterval) === 0)
      })
      return filteredSeconds
    }
  }

  calculateWidth(event) {
    const relX = event.pageX - (this.refs.timeline.offsetLeft + this.refs.timeline.offsetParent.offsetLeft)
    const progressBarPercent = relX * 100 / this.refs.timeline.getBoundingClientRect().width
    const seekSeconds = progressBarPercent * this.props.player.duration / 100
    return seekSeconds
  }

  onMouseMove(event) {
    this.props.updateTimelineHoverTime(this.calculateWidth(event));
    this.setState({
      hoverWidth: this.calculateWidth(event) * 100 / this.props.player.duration + '%'
    })
  }

  onMouseLeave() {
    this.props.updateTimelineHoverTime(null);
    this.setState({
      hoverWidth: 0
    })
  }

  handlePorgressBarClick(event) {
    const relX = event.pageX - (this.refs.timeline.offsetLeft + this.refs.timeline.offsetParent.offsetLeft)
    const progressBarPercent = relX * 100 / this.refs.timeline.getBoundingClientRect().width
    const seekSeconds = progressBarPercent * this.props.player.duration / 100
    this.props.seekToTime(seekSeconds)
  }

  render() {


    const progressBarWidth = {
      width: this.props.player.currentTime * 100 / this.props.player.duration + '%'
    }

    const cursor = {
      left: this.props.player.currentTime * 100 / this.props.player.duration + '%'
    }

    const progressBarHoverWidth = {
      width: this.state.hoverWidth
    }

    const hoverTimeOffset = {
      left: this.state.hoverWidth
    }

    let progressBarClasses = classNames({
      'progress-bar': true,
      'active': this.props.player.status === 'playing' || this.props.player.status === 'paused'
    })

    return (
      <div
        className="timeline-container"
        ref="timeline"
        onMouseMove={this.onMouseMove.bind(this)}
        onMouseLeave ={this.onMouseLeave.bind(this)}
        onClick={this.handlePorgressBarClick.bind(this)}
      >
        <div className="progress-bar-wrapper">
          <div className={progressBarClasses} style={progressBarWidth}></div>
          <div className="progress-bar-hover" style={progressBarHoverWidth}></div>
        </div>

        {this.props.time.timelineHoverTime ? <div className="hover-time" style={hoverTimeOffset}>
          <span className="time-container">
            {formatTime(this.props.time.timelineHoverTime)}
          </span>
        </div>: ""}



        <div className="cursor playing" style={cursor} ></div>

        <ul className="time-list">
          {this.state.times}
        </ul>
      </div>
    );
  }
}
