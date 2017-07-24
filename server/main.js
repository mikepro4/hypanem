import { Meteor } from 'meteor/meteor';
import registerVideoSecurity from './security/videos';

import registerAuthPublications from './publications/auth';
import registerVideosPublications from './publications/videos';

import getUserDataFactory from './methods/user/getUserData';

import { Videos } from '../collections/videos';

registerVideoSecurity(Videos);

registerAuthPublications(getUserDataFactory(Meteor.users));
registerVideosPublications(Videos);

Meteor.methods({
  testMethod: function testMethod(id) {
    console.log(id)
    return Videos.find({_id: id}).fetch();
  },
})

Meteor.startup(() => {
  console.log('server lol')
})
