import React, {PropTypes} from 'react';
import _ from 'lodash'
import { Button } from "@blueprintjs/core";

export default class PlayerControls extends React.Component {
  onPlay() {
    this.props.updatePlayerStatus('play')
  }

  onPause() {
    this.props.updatePlayerStatus('pause')
  }

  onStop() {
      this.props.updatePlayerStatus('stop')
  }

  render() {
    let { Play, Pause, Stop } = false

    switch(this.props.player.status) {
      case(undefined):
        Play = true
        break
      case('playing'):
        Play = false
        Pause = true
        Stop = true
        break
      case('play'):
        Play = false
        Pause = true
        Stop = true
        break
      case('waiting'):
        Play = false
        Pause = true
        Stop = true
        break
      case('pause'):
        Play = true
        Pause = false
        Stop = true
        break
      case('paused'):
        Play = true
        Pause = false
        Stop = true
        break
      case('stopped' || 'stop'):
        Play = true
        Pause = false
        Stop = false
        break
      case('stopped' || 'stop'):
        Play = true
        Pause = false
        Stop = false
        break
    }

    return (
      <ul className='player-controls-container'>

        {Play ?
          <li className='play'><Button onClick={this.onPlay.bind(this)} iconName="play" className="pt-minimal"></Button></li>
          : ''
        }

        {Pause ?
          <li className='pause'><Button onClick={this.onPause.bind(this)} iconName="pause" className="pt-minimal"></Button></li>
          : ''
        }

        {/* {Stop ?
          <li className='stop'><button onClick={this.onStop.bind(this)} className='button'>Stop</button></li>
          : ''
        } */}

      </ul>
    );
  }
}
