/* global Meteor */

export default function(videoCollection) {
  Meteor.publish('videos', function publishVideos(finalUserId) {
    console.log(finalUserId)
    return videoCollection.findByUser(finalUserId);
  });
}
