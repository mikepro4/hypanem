import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import * as _ from 'lodash';
import { Button, FocusStyleManager, Position, Toaster, Classes, Intent } from "@blueprintjs/core";
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import Home from '../home/Home';
import Trends from '../trends/Trends';
import AppHeader from '../../../containers/pages/app/App_header';
import SignIn from '../../../containers/pages/auth/signin/Sign_in';
import SignUp from '../../../containers/pages/auth/signup/Sign_up';
import SignOut from '../../../containers/pages/auth/signout/Sign_out';

import VideoAdd from '../../../containers/pages/video_add/Video_add';
import Library from '../../../containers/pages/library/Library';
import SingleVideo from '../../../containers/pages/single_video/Single_video';

FocusStyleManager.onlyShowFocusOnTabs();

class App extends Component {
  componentDidMount() {
    // this.props.history.push('/home')
    this.props.loadVideos(this);
  }

  componentDidUpdate(prevProps, prevState) {
    //restart subscription when user changes
    if(_.isNil(prevProps.auth.user) !== _.isNil(this.props.auth.user)) {
        this.props.loadVideos(this);
    }
  }

  showNotification(reason) {
    this.refs.toaster.show({
      message: reason,
      intent: Intent.PRIMARY
    });
  }

  render() {
    const { match, location, history, title } = this.props
    return(
        <div className="app pt-dark">

          <Toaster position={Position.BOTTOM_LEFT} ref="toaster" />

          <Helmet title="Главная – Hype DNA" />

          <AppHeader {...this.props} />

          <div className="app-content">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/home" exact component={Home} />
              <Route path="/trends" component={Trends} />
              <Route path="/auth/signin" component={SignIn} />
              <Route path="/auth/signup" component={SignUp} />
              <Route path="/auth/signout" component={SignOut} />
              <Route path="/add" component={VideoAdd} />
              <Route path="/library" component={Library} />
              <Route path="/video/:id" exact component={SingleVideo} />
            </Switch>
          </div>

        </div>
    );
  }
}

export default App;
