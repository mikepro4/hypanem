import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signUpAction } from '../../../../actions/auth'

import SignUp from '../../../../components/pages/auth/signup/Sign_up';

function mapStateToProps(state) {
  return {
    auth: state.auth,
    loading: state.loading
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    signUpAction
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
