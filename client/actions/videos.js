import { push } from 'react-router-redux'

import {
  VIDEOS_SINGLE_LOADED,
  LOAD_YOUTUBE_VIDEO_DETAILS,
  LOAD_YOUTUBE_VIDEO_DETAILS_SUCCESS,
  LOAD_CHANNEL_DETAILS,
  LOAD_CHANNEL_DETAILS_SUCCESS,
  CLEAR_LOADED_CHANNEL,
  CLEAR_LOADED_VIDEO
} from './types'

import actionTypeBuilder from './actionTypeBuilder';
import { newErrorNotification } from './notifications';

import { Videos } from '../../collections/videos';

export const VIDEOS = actionTypeBuilder.type('VIDEOS');
export const VIDEOS_REMOVE = actionTypeBuilder.type('VIDEOS_REMOVE');
export const VIDEOS_INSERT = actionTypeBuilder.type('VIDEOS_INSERT');
export const VIDEOS_UPDATE = actionTypeBuilder.type('VIDEOS_UPDATE');
export const LOAD_SINGLE_VIDEO = actionTypeBuilder.type('LOAD_SINGLE_VIDEO');

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
          get: () => Videos.findByUser(finalUserId).fetch()
          // onChange: () => component.showNotification('videos collection changed')
        },
      });
    };
  };
}

export function loadVideo(video) {
  return {
    type: VIDEOS_SINGLE_LOADED,
    data: video[0]
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

export function loadSingleVideo(id, successCallBack) {
  return dispatch => {
    dispatch(clearLoadedVideo())
    dispatch(clearLoadedChannel())
    dispatch({
      type: LOAD_SINGLE_VIDEO,
      meteor: {
        call: {
          method: 'loadSingleVideo',
          parameters: [id],
          onSuccess: (data) => {
            console.log(data)
            dispatch(loadVideo(data))
            dispatch(push(`/video/${id}`));
            dispatch(loadChannelData(data[0].channelId))
            if(successCallBack) {
              return(successCallBack())
            }
          },
        },
      },
    });
  };
}

export function newVideo(newVideo) {
  return dispatch => {
    dispatch({
      type: VIDEOS_INSERT,
      meteor: {
        insert: {
          entity: newVideo,
          collection: Videos,
          onError: (error) => console.log(error),
          onSuccess: (data) =>  {
            dispatch(push("library/video/awaiting"))
          },
        },
      },
    });
  };
}

export function updateVideo(newVideo, id) {
  return dispatch => {
    dispatch({
      type: VIDEOS_UPDATE,
      meteor: {
        update: {
          id,
          modifiers: {
            $set: newVideo,
          },
          collection: Videos,
        },
      },
    });
  };
}


export function loadYoutubeVideoData(videoId, successCallBack) {
  return dispatch => {
    dispatch({
      type: LOAD_YOUTUBE_VIDEO_DETAILS,
      meteor: {
        call: {
          method: 'loadYoutubeDetails',
          parameters: [videoId],
          onSuccess: (data) => {
            dispatch({
              type: LOAD_YOUTUBE_VIDEO_DETAILS_SUCCESS,
              data: data
            });
            dispatch(loadChannelData(data.items[0].snippet.channelId))
            if(successCallBack) {
              return(successCallBack())
            }
          },
        },
      },
    });
  };
}

export function loadChannelData(channelId) {
  return dispatch => {
    dispatch({
      type: LOAD_CHANNEL_DETAILS,
      meteor: {
        call: {
          method: 'loadChannelDetails',
          parameters: [channelId],
          onSuccess: (data) => {
            dispatch({
              type: LOAD_CHANNEL_DETAILS_SUCCESS,
              data: data
            });
          },
        },
      },
    });
  };
}

export function clearLoadedVideo() {
  return {
    type: CLEAR_LOADED_VIDEO,
  }
}

export function clearLoadedChannel() {
  return {
    type: CLEAR_LOADED_CHANNEL,
  }
}
