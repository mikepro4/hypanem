import { Mongo } from 'meteor/mongo';
// import Watson from 'watson-developer-cloud'

Meteor.methods({
  'videos.insert': function(formFields) {
    return Videos.insert({
      createdAt: new Date(),
      content: '',
      url: formFields.url,
      ownerId: this.userId
    });
  },

  'videos.remove': function(video) {
    return Vi.remove(video);
  },

  'videos.update': function(video, content) {
    return Posts.update(video._id, { $set: { content } });
  },
});

export default Videos = new Mongo.Collection('videos');
