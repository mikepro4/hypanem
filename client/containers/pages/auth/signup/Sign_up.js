import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Signup from '../../../../components/pages/auth/signup/Sign_up';

function mapStateToProps(state) {
  return {
    auth: state.auth,
    loading: state.loading
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
