import { Meteor } from 'meteor/meteor';
import axios from 'axios';

import registerVideosHooks from './hooks/videos';

import registerVideoSecurity from './security/videos';
import registerChannelSecurity from './security/channels';

import registerAuthPublications from './publications/auth';
import registerVideosPublications from './publications/videos';

import getUserDataFactory from './methods/user/getUserData';

import { Videos } from '../collections/videos';
import { Channels } from '../collections/channels';

registerVideoSecurity(Videos);
registerChannelSecurity(Channels);

registerAuthPublications(getUserDataFactory(Meteor.users));
registerVideosPublications(Videos);

const YOUTUBE_API_KEY = 'AIzaSyDQ_kgowJCa-mH5wnjnQ1mOE4nBqQIGij8'

const addChannel = (channelId) => {
  console.log('add channel')
  const channelExists = Channels.find({channelId}).fetch()
  if(channelExists.length > 0) {
  } else {
    console.log('no channel added')
    axios.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${YOUTUBE_API_KEY}`)
      .then((data)=> {
        Channels.insert({
          id: data.data.items[0].id,
          title: data.data.items[0].snippet.title,
          description: data.data.items[0].snippet.description,
          customUrl: data.data.items[0].snippet.customUrl,
          publishedAt: data.data.items[0].snippet.publishedAt,
          thumbnails: data.data.items[0].snippet.thumbnails
        }, error => {
          console.log('error', error)
          console.log('yay')
        })
      })
  }
}

registerVideosHooks(Videos, addChannel);

Meteor.methods({
  testMethod: function testMethod(id) {
    return Videos.find({_id: id}).fetch();
  },

  loadYoutubeDetails: function loadYoutubeDetails(id) {
    return axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${id}&key=${YOUTUBE_API_KEY}`)
      .then((data)=> {
        return(data.data)
      })
  },

  loadChannelDetails: function loadYoutubeDetails(id) {
    return axios.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${id}&key=${YOUTUBE_API_KEY}`)
      .then((data)=> {
        return(data.data)
      })
  },
})

Meteor.startup(() => {
})
