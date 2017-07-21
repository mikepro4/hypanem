import {
  SET_TITLE_SUCCESS,
} from './types'

export function updateAppTitlte(title) {
  return {
    type: SET_TITLE_SUCCESS,
    payload: title
  };
}
