export default function(videoCollection, addChannel) {
  videoCollection.after.insert((userId, doc) => addChannel(doc.channelId));
}
