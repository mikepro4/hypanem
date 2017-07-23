import lodash from 'lodash';
import findByUserFactory from './videos/findByUser';
import addUserOnInsert from './common/addUserOnInsert';

export const VideoSchema = new SimpleSchema({
  url: {
    type: String,
    max: 50,
  },
  date: {
    type: Date,
  },
  userId: {
    type: String,
    autoValue: function autoValue() {
      return addUserOnInsert(this);
    },
  },
});

export const Videos = new Mongo.Collection('videos');
Videos.attachSchema(VideoSchema);

Videos.findByUser = findByUserFactory(Videos);
