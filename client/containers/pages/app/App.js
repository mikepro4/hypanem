import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateAppTitle } from '../../../actions/app'
import { loadVideosFactory } from '../../../actions/videos'

import App from '../../../components/pages/app/App';

function mapStateToProps(state) {
  return {
    title: state.app.title,
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateAppTitle,
    loadVideos: loadVideosFactory(),
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
