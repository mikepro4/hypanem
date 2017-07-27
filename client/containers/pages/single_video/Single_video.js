import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {reset} from 'redux-form';

import SingleVideo from '../../../components/pages/single_video/Single_video';
import { loadSingleVideo } from '../../../actions/videos'

function mapStateToProps(state) {
  return {
    videos: state.videos,
    singleVideo: state.videos.singleVideo
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loadSingleVideo
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleVideo);
