import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteVideoFactory, testMethod } from '../../../actions/videos'

import AwaitingVideos from '../../../components/pages/library/Awaiting_videos';

function mapStateToProps(state) {
  return {
    videos: state.videos
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deleteVideoFactory,
    testMethod
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AwaitingVideos);
