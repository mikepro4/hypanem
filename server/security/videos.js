/**
 * Apply the security rules on the Meal collection
 */
export default function(videoCollection) {
  videoCollection.allow({
    insert: (userId, doc) => userId === doc.userId,
    update: (userId, doc, fieldNames) => userId === doc.userId && !fieldNames.some(field => field === 'userId'),
    remove: (userId, doc) => userId === doc.userId,
  });
}
