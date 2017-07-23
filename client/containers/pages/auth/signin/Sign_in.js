import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { loginWithPassword } from '../../../../actions/auth'

import Signin from '../../../../components/pages/auth/signin/Sign_in';

function mapStateToProps(state) {
  return {
    auth: state.auth,
    loading: state.loading
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loginWithPassword
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
