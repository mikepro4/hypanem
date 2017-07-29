import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { } from '../../../actions/videos'
import { updatePlayerStatus } from '../../../actions/player'

import PlayerControls from '../../../components/common/player/Player_controls';

function mapStateToProps(state) {
  return {
    player: state.player
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updatePlayerStatus
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerControls);
