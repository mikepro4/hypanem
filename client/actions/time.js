import {
  TIMELINE_HOVER_TIME,
} from './types';

export function updateTimelineHoverTime(time) {
  return {
    type: TIMELINE_HOVER_TIME,
    timelineHoverTime: time
  };
}
