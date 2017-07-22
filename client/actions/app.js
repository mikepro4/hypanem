import {
  SET_TITLE_SUCCESS,
} from './types'

export function updateAppTitle(title) {
  return {
    type: SET_TITLE_SUCCESS,
    payload: title
  };
}
