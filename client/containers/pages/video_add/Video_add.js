import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { newVideoFactory } from '../../../actions/videos'

import VideoAdd from '../../../components/pages/video_add/Video_add';

function mapStateToProps(state) {
  return {
    auth: state.auth,
    videos: state.videos
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    newVideo: newVideoFactory(),
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoAdd);
