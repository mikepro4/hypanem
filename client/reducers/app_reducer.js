import {
  SET_TITLE_SUCCESS,
} from '../actions/types'

export default (state = {title: 'lol'}, action) => {
  switch (action.type) {
    case SET_TITLE_SUCCESS:
      return {...state,
        title: action.payload,
      }
    default:
      return state
  }
}
