import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {reset} from 'redux-form';
import { newVideo, loadYoutubeVideoData, clearLoadedVideo, loadChannelData, clearLoadedChannel} from '../../../actions/videos'
import { updatePlayerVideo } from '../../../actions/player'
import VideoAdd from '../../../components/pages/video_add/Video_add';

function mapStateToProps(state) {
  return {
    auth: state.auth,
    videos: state.videos,
    form: state.form,
    singleVideo: state.videos.loadedVideoDetails ? state.videos.loadedVideoDetails.items[0] : null
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    newVideo,
    loadYoutubeVideoData,
    reset,
    clearLoadedVideo,
    loadChannelData,
    clearLoadedChannel,
    updatePlayerVideo
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoAdd);
