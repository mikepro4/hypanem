/* global Meteor */

export default function(videoCollection) {
  Meteor.publish('videos', function publishVideos(finalUserId) {
    return videoCollection.findByUser(finalUserId);
  });
}
