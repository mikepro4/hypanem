import React, { Component, PropTypes } from 'react';
import DevTools from './DevTools'
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import Home from './Home';
import Trends from './Trends';

class App extends Component {
  render() {
    console.log(this.props)
    this.props.history.listen(location => {
      if (location.pathname !== this.props.location.pathname) {
        this.props.location.pathname = location.pathname;
        this.forceUpdate();
      }
    });

    return(
        <div>
          <header>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/trends">Trends</Link></li>
            </ul>
          </header>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/trends" component={Trends} />
          </Switch>

          <DevTools/>
        </div>
    );
  }
}

export default App;
