import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

class Home extends Component {
  render() {
    return(
      <div>
        <Helmet title="Главная – Hype DNA" />
        Home
      </div>
    );
  }
}

export default Home;
