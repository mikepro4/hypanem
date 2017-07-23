export default function(videoCollection) {
  return (userId) => {
    return videoCollection.find({
      userId
    }, {
      sort: {
        date: 1,
      },
    });
  };
}
