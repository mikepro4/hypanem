import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loadVideo } from '../../../actions/videos'

import AwaitingSingleVideo from '../../../components/pages/library/Awaiting_single_video';

function mapStateToProps(state) {
  return {
    videos: state.videos,
    singleVideo: state.videos.singleVideo
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loadVideo,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AwaitingSingleVideo);
