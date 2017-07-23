import React, { Component, PropTypes } from 'react';
import DevTools from '../../DevTools'
import { Button, FocusStyleManager } from "@blueprintjs/core";
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import Home from '../home/Home';
import Trends from '../trends/Trends';
import AppHeader from '../../../containers/pages/app/App_header';
import SignIn from '../../../containers/pages/auth/signin/Sign_in';

FocusStyleManager.onlyShowFocusOnTabs();

class App extends Component {
  componentDidMount() {
    // this.props.history.push('/home')
  }

  render() {
    const { match, location, history, title } = this.props
    return(
        <div className="app">

          <AppHeader {...this.props} />

          <div className="app-content">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/home" exact component={Home} />
              <Route path="/trends" component={Trends} />
              <Route path="/auth/signin" component={SignIn} />
            </Switch>
          </div>

          <DevTools/>
        </div>
    );
  }
}

export default App;
