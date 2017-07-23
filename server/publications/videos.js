/* global Meteor */

export default function(videoCollection) {
  Meteor.publish('videos', function publishVideos(userId) {
    if (!userId) {
      return this.error(new Meteor.Error(401, 'Unauthorized'));
    }

    return videoCollection.findByUser(userId || this.userId);
  });
}
