import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from '../../../../actions/auth'

import Signout from '../../../../components/pages/auth/signout/Sign_out';

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    logout
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Signout);
