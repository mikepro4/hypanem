import { Meteor } from 'meteor/meteor';
import Videos from '../collections/videos'

import registerAuthPublications from './publications/auth';
import getUserDataFactory from './methods/user/getUserData';

registerAuthPublications(getUserDataFactory(Meteor.users));

Meteor.startup(() => {
  console.log('server lol')

  Meteor.publish('currentUser', function() {
    return Meteor.users.find({_id: this.userId}, {});
  });

  Meteor.publish('videos', function() {
    return Videos.find({ ownerId: this.userId });
  });
})
