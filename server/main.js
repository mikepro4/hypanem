import { Meteor } from 'meteor/meteor';
import axios from 'axios';

import registerVideoSecurity from './security/videos';

import registerAuthPublications from './publications/auth';
import registerVideosPublications from './publications/videos';

import getUserDataFactory from './methods/user/getUserData';

import { Videos } from '../collections/videos';

registerVideoSecurity(Videos);

registerAuthPublications(getUserDataFactory(Meteor.users));
registerVideosPublications(Videos);

const YOUTUBE_API_KEY = 'AIzaSyDQ_kgowJCa-mH5wnjnQ1mOE4nBqQIGij8'

Meteor.methods({
  testMethod: function testMethod(id) {
    console.log(id)
    return Videos.find({_id: id}).fetch();
  },
  loadYoutubeDetails: function loadYoutubeDetails(id) {
    return axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${id}&key=${YOUTUBE_API_KEY}`)
      .then((data)=> {
        console.log(data.data)
        return(data.data)
      })
  },
})

Meteor.startup(() => {
  console.log('server lol')
})
