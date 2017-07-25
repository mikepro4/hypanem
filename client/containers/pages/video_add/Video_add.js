import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {reset} from 'redux-form';
import { newVideo, loadYoutubeVideoData, clearLoadedVideo} from '../../../actions/videos'

import VideoAdd from '../../../components/pages/video_add/Video_add';

function mapStateToProps(state) {
  return {
    auth: state.auth,
    videos: state.videos,
    form: state.form
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    newVideo,
    loadYoutubeVideoData,
    reset,
    clearLoadedVideo
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoAdd);
