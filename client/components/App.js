import React, { Component, PropTypes } from 'react';
import DevTools from './DevTools'
import { Button, FocusStyleManager } from "@blueprintjs/core";
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import Home from './Home';
import Trends from './Trends';
import AppHeader from '../containers/App_header';

FocusStyleManager.onlyShowFocusOnTabs();

class App extends Component {
  componentDidMount() {
    //Programmatic navigation
    // this.props.history.push('/trends')
  }

  render() {
    const { match, location, history, title } = this.props
    return(
        <div className="app">

          <AppHeader />

          <div className="app-content">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/trends" component={Trends} />
            </Switch>
          </div>

          <DevTools/>
        </div>
    );
  }
}

export default App;
