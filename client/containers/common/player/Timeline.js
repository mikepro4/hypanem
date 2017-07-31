import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { } from '../../../actions/videos'
import { seekToTime } from '../../../actions/player'
import { updateTimelineHoverTime } from '../../../actions/time'

import Timeline from '../../../components/common/player/Timeline';

function mapStateToProps(state) {
  return {
    player: state.player,
    time: state.time
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    seekToTime,
    updateTimelineHoverTime
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
