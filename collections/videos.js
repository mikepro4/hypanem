import lodash from 'lodash';
import findByUserFactory from './videos/findByUser';
import addUserOnInsert from './common/addUserOnInsert';

export const VideoSchema = new SimpleSchema({
  date: {
    type: Date,
  },
  userId: {
    type: String,
    autoValue: function autoValue() {
      return addUserOnInsert(this);
    },
  },
  id: {
    type: String
  },
  duration: {
    type: String
  },
  categoryId: {
    type: String
  },
  channelId: {
    type: String
  },
  publishedAt: {
    type: String
  },
  thumbnails: {
    type: Object
  },
  title: {
    type: String
  }
});

export const Videos = new Mongo.Collection('videos');
Videos.attachSchema(VideoSchema);

Videos.findByUser = findByUserFactory(Videos);
