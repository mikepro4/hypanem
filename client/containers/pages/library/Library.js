import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Library from '../../../components/pages/library/Library';

function mapStateToProps(state) {
  return {
    videos: state.videos
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Library);
