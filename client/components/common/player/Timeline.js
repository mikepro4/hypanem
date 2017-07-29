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
      const timesAmount = Math.floor(containerWIdth/35/2)
      const timeInterval = Math.floor(this.props.player.duration / timesAmount)

      const secondsArray = Array.apply(null, {length: this.props.player.duration}).map(Number.call, Number)

      const filteredSeconds = _.filter(secondsArray, (number) => {
        return((number % timeInterval) === 0)
      })
      return filteredSeconds
    }
  }

  render() {

    return (
      <div className="timeline-container" ref="timeline">
        <ul className="time-list">
          {this.state.times}
        </ul>
      </div>
    );
  }
}
