export default function(channelCollection) {
  channelCollection.allow({
    insert: (userId, doc) => true,
    update: (userId, doc, fieldNames) => true,
    remove: (userId, doc) =>true,
  });
}
