import { push } from 'react-router-redux'

import actionTypeBuilder from './actionTypeBuilder';
import { newErrorNotification } from './notifications';

import { Videos } from '../../collections/videos';

export const VIDEOS = actionTypeBuilder.type('VIDEOS');
export const VIDEOS_REMOVE = actionTypeBuilder.type('VIDEOS_REMOVE');
export const VIDEOS_INSERT = actionTypeBuilder.type('VIDEOS_INSERT');
export const VIDEOS_UPDATE = actionTypeBuilder.type('VIDEOS_UPDATE');
export const VIDEOS_SINGLE_LOADED = actionTypeBuilder.type('VIDEOS_UPDATE');

export function loadVideosFactory() {
  return (component) => {
    const finalUserId = Meteor.userId();
    return dispatch => {
      dispatch({
        type: VIDEOS,
        meteor: {
          subscribe: () => Meteor.subscribe('videos', finalUserId, {
            onStop: error => {
              if (error && error.error === 401) {
                dispatch(newErrorNotification('error'));
              }
            },
          }),
          get: () => Videos.findByUser(finalUserId).fetch(),
          onChange: () => component.showNotification('videos collection loaded')
        },
      });
    };
  };
}

export function loadVideo(id) {
  return dispatch => {
    dispatch({
      type: VIDEOS_SINGLE_LOADED,
      meteor: {
        subscribe: () => Meteor.subscribe('videos', Meteor.userId()),
        get: () => Videos.find(id).fetch(),
      },
    });
  }
}

export function deleteVideoFactory(id) {
  return dispatch => {
    dispatch({
      type: VIDEOS_REMOVE,
      meteor: {
        remove: {
          id,
          collection: Videos,
        },
      },
    });
  };
}

export function newVideo(url, date) {
  return dispatch => {
    dispatch({
      type: VIDEOS_INSERT,
      meteor: {
        insert: {
          entity: {
            date,
            url,
          },
          collection: Videos,
        },
      },
    });
    dispatch(push('/library/video/awaiting/'));
  };
}

export function updateVideoFactory(url) {
  return dispatch => {
    dispatch({
      type: VIDEOS_UPDATE,
      meteor: {
        update: {
          id,
          modifiers: {
            $set: {
              url: url,
            },
          },
          collection: Videos,
        },
      },
    });
  };
}
