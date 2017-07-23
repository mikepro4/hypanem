import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Button, FocusStyleManager } from "@blueprintjs/core";
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import Home from '../home/Home';
import Trends from '../trends/Trends';
import AppHeader from '../../../containers/pages/app/App_header';
import SignIn from '../../../containers/pages/auth/signin/Sign_in';
import SignUp from '../../../containers/pages/auth/signup/Sign_up';
import SignOut from '../../../containers/pages/auth/signout/Sign_out';

FocusStyleManager.onlyShowFocusOnTabs();

class App extends Component {
  componentDidMount() {
    // this.props.history.push('/home')
  }

  render() {
    const { match, location, history, title } = this.props
    return(
        <div className="app pt-dark">

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
            </Switch>
          </div>

        </div>
    );
  }
}

export default App;
