
import {
  UPDATE_STATUS,
  UPDATE_TIME,
  UPDATE_PLAYER_VIDEO_ID,
  RESET_VIDEO
} from './types';

export function updatePlayerStatus(status) {
  return {
    type: UPDATE_STATUS,
    status: status
  };
}

export function updateTime(currentTime) {
  return {
    type: UPDATE_TIME,
    currentTime
  };
}

export function updatePlayerVideo(playingVideoId, duration) {
  return {
    type: UPDATE_PLAYER_VIDEO_ID,
    playingVideoId: playingVideoId,
    duration
  };
}

export function resetVideo() {
  return {
    type: RESET_VIDEO
  };
}
