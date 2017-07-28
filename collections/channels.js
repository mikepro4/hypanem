import lodash from 'lodash';
import addUserOnInsert from './common/addUserOnInsert';

const ThumbnailsSchema = new SimpleSchema({
  defaultUrl: {
    type: String
  },
  mediumUrl: {
    type: String
  },
  highUrl: {
    type: String
  }
})

export const ChannelSchema = new SimpleSchema({
  id: {
    type: String
  },
  title: {
    type: String
  },
  description: {
    type: String,
    optional: true
  },
  customUrl: {
    type: String,
    optional: true
  },
  publishedAt: {
    type: String
  },
  thumbnails: {
    type: ThumbnailsSchema,
    optional: true
  },
  addedAt: {
    type: Date
  },
  addedByUser: {
    type: String,
    autoValue: function autoValue() {
      return addUserOnInsert(this);
    },
  },
});

export const Channels = new Mongo.Collection('channels');
Channels.attachSchema(ChannelSchema);
