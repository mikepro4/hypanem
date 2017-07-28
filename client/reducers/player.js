import { assign } from 'lodash';
import {
  UPDATE_STATUS,
  UPDATE_TIME,
  UPDATE_PLAYER_VIDEO_ID
} from '../actions/types'

const initialPlayerState = {
  playingVideoId: null,
  duration: 0,
  currentTime: 0,
  status: "stopped"
}

export default (state = initialPlayerState, action) => {
  switch (action.type) {
      case UPDATE_TIME:
        return  assign({}, state, {
          currentTime: action.currentTime || 0
        })

      case UPDATE_PLAYER_VIDEO_ID:
        return  assign({}, state, {
          playingVideoId: action.playingVideoId,
          duration: action.duration,
          currentTime: 0,
          status: "stopped"
        })
      case UPDATE_STATUS:
        return  assign({}, state, {
          status: action.status
        })
    default:
      return state
  }
}
