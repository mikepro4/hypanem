import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {reset} from 'redux-form';
import { newVideo, loadYoutubeVideoData } from '../../../actions/videos'

import Player from '../../../components/common/player/Player';

function mapStateToProps(state) {
  return {
    video: state.videos.loadedVideoDetails,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    newVideo,
    loadYoutubeVideoData,
    reset
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
