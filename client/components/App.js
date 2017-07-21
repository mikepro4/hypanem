import React, { Component, PropTypes } from 'react';
import DevTools from './DevTools'
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import Home from './Home';
import Trends from './Trends';

class App extends Component {
  componentDidMount() {
    //Programmatic navigation
    this.props.history.push('/trends')
  }

  render() {
    const { match, location, history, title } = this.props
    return(
        <div>
          <header>
            <div>You are now at {location.pathname}</div>
            <div>Title is: {title}</div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/trends">Trends</Link></li>
            </ul>
          </header>

          <div onClick={() => this.props.updateAppTitlte('test')}>test button</div>

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
