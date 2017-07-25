import { assign } from 'lodash';
import actionTypeBuilder from '../actions/actionTypeBuilder';
import { VIDEOS, VIDEOS_REMOVE } from '../actions/videos';
import {
  VIDEOS_SINGLE_LOADED,
  LOAD_YOUTUBE_VIDEO_DETAILS_SUCCESS,
  LOAD_CHANNEL_DETAILS,
  LOAD_CHANNEL_DETAILS_SUCCESS,
  CLEAR_LOADED_CHANNEL,
  CLEAR_LOADED_VIDEO
} from '../actions/types'

export const initialState = {
  items: [],
  ready: false,
  singleVideo: {}
};

export default function(state = initialState, action) {
  const { data, ready, type } = action;

  switch (type) {
  case actionTypeBuilder.ready(VIDEOS):
    return assign({}, state, { ready });

  case actionTypeBuilder.changed(VIDEOS):
    return assign({}, state, { items: data });

  case VIDEOS_SINGLE_LOADED:
    return assign({}, state, { singleVideo: data });

  case LOAD_YOUTUBE_VIDEO_DETAILS_SUCCESS:
    return assign({}, state, { loadedVideoDetails: data });

  case CLEAR_LOADED_VIDEO:
    return assign({}, state, { loadedVideoDetails: null });

  case LOAD_CHANNEL_DETAILS_SUCCESS:
    return assign({}, state, { loadedChannelDetails: data });

  case CLEAR_LOADED_CHANNEL:
    return assign({}, state, { loadedChannelDetails: null });

  case actionTypeBuilder.changed(VIDEOS_REMOVE):
    return assign({}, state, { items: data });

  default:
    return state;
  }
}
