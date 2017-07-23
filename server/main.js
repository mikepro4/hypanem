import { Meteor } from 'meteor/meteor';

import registerAuthPublications from './publications/auth';
import getUserDataFactory from './methods/user/getUserData';

registerAuthPublications(getUserDataFactory(Meteor.users));

Meteor.startup(() => {
  console.log('server lol')
})
