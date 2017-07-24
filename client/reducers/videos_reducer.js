import { assign } from 'lodash';
import actionTypeBuilder from '../actions/actionTypeBuilder';
import { VIDEOS, VIDEOS_SINGLE_LOADED, VIDEOS_REMOVE } from '../actions/videos';

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

  case actionTypeBuilder.changed(VIDEOS_SINGLE_LOADED):
    return assign({}, state, { singleVideo: data[0] });

  case actionTypeBuilder.changed(VIDEOS_REMOVE):
    return assign({}, state, { items: data });

  default:
    return state;
  }
}
