import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from '../components/App';

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
