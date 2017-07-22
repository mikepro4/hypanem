import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AppHeader from '../components/App_header';

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(AppHeader);
