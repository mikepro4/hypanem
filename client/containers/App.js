import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateAppTitlte } from '../actions/app'

import App from '../components/App';

function mapStateToProps(state) {
  return {
    title: state.app.title
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateAppTitlte
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
