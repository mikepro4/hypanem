import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {reset} from 'redux-form';
import { newVideo, loadYoutubeVideoData } from '../../../actions/videos'
import { updatePlayerStatus, updateTime } from '../../../actions/player'

import Player from '../../../components/common/player/Player';

function mapStateToProps(state) {
  return {
    player: state.player
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updatePlayerStatus,
    updateTime
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
