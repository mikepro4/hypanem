import { assign } from 'lodash';
import {
  TIMELINE_HOVER_TIME
} from '../actions/types'

const initialTimeState = {
  timelineHoverTime: null
}

export default (state = initialTimeState, action) => {
  switch (action.type) {
      case TIMELINE_HOVER_TIME:
        return  assign({}, state, {
          timelineHoverTime: action.timelineHoverTime || null,
        })
    default:
      return state
  }
}
