import lodash from 'lodash';

export const ChannelSchema = new SimpleSchema({
  id: {
    type: String
  },
  title: {
    type: String
  },
  description: {
    type: String
  },
  customUrl: {
    type: String
  },
  publishedAt: {
    type: String
  },
  thumbnails: {
    type: Object
  }
});

export const Channels = new Mongo.Collection('channels');
Channels.attachSchema(ChannelSchema);
