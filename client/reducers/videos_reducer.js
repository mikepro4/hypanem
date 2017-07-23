import { assign } from 'lodash';
import actionTypeBuilder from '../actions/actionTypeBuilder';
import { VIDEOS } from '../actions/videos';

export const initialState = {
  items: [],
  ready: false,
};

export default function(state = initialState, action) {
  const { data, ready, type } = action;

  switch (type) {
  case actionTypeBuilder.ready(VIDEOS):
    return assign({}, state, { ready });

  case actionTypeBuilder.changed(VIDEOS):
    return assign({}, state, { items: data });

  default:
    return state;
  }
}
