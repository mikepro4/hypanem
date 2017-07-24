import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateVideo, testMethod } from '../../../actions/videos'

import AwaitingSingleVideo from '../../../components/pages/library/Awaiting_single_video';

function mapStateToProps(state) {
  return {
    videos: state.videos,
    singleVideo: state.videos.singleVideo
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateVideo,
    testMethod
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AwaitingSingleVideo);
