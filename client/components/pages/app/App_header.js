import React, { Component, PropTypes } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import { Button } from "@blueprintjs/core";

class AppHeader extends Component {
  componentDidMount() {
  }

  render() {
    return(
        <header className="app-header">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/trends">Trends</Link></li>
          </ul>
        </header>
    );
  }
}

export default AppHeader;
