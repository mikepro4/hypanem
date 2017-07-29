import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { } from '../../../actions/videos'
import { seekToTime } from '../../../actions/player'

import Timeline from '../../../components/common/player/Timeline';

function mapStateToProps(state) {
  return {
    player: state.player
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    seekToTime
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
