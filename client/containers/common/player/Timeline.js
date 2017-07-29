import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { } from '../../../actions/videos'
import { } from '../../../actions/player'

import Timeline from '../../../components/common/player/Timeline';

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
