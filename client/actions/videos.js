import actionTypeBuilder from './actionTypeBuilder';
import { newErrorNotification } from './notifications';

export const VIDEOS = actionTypeBuilder.type('VIDEOS');
export const VIDEOS_REMOVE = actionTypeBuilder.type('VIDEOS_REMOVE');
export const VIDEOS_INSERT = actionTypeBuilder.type('VIDEOS_INSERT');
export const VIDEOS_UPDATE = actionTypeBuilder.type('VIDEOS_UPDATE');

export function loadVideosFactory(videoCollection) {
  return () => {
    const finalUserId = Meteor.userId(); // Override with current user if not specified
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
          get: () => videoCollection.findByUser(finalUserId).fetch(),
        },
      });
    };
  };
}

export function deleteVideoFactory(collection) {
  return id => {
    return dispatch => {
      dispatch({
        type: VIDEOS_REMOVE,
        meteor: {
          remove: {
            id,
            collection,
          },
        },
      });
    };
  };
}


export function newVideoFactory(collection) {
  return (url, date) => {
    return dispatch => {
      dispatch({
        type: VIDEOS_INSERT,
        meteor: {
          insert: {
            entity: {
              date,
              url,
            },
            collection,
          },
        },
      });
    };
  };
}

// bullshit
export function updateVideoFactory(collection) {
  return (id, date) => {
    return dispatch => {
      dispatch({
        type: VIDEOS_UPDATE,
        meteor: {
          update: {
            id,
            modifiers: {
              $set: {
                date: moment(date).toDate(),
              },
            },
            collection,
          },
        },
      });
    };
  };
}
