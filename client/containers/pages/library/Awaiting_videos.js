import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteVideoFactory, loadSingleVideo } from '../../../actions/videos'
import { resetVideo } from '../../../actions/player'

import AwaitingVideos from '../../../components/pages/library/Awaiting_videos';

function mapStateToProps(state) {
  return {
    videos: state.videos
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    deleteVideoFactory,
    loadSingleVideo,
    resetVideo
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AwaitingVideos);
