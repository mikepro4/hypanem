import React from 'react';
import { NavLink } from 'react-router-dom';

export default class Person extends React.Component {
  render() {
    return (
      <NavLink to={"/person/" + this.props.person.id} className="channel-avatar-container">
        <div className="channel-avatar">
            <img src={ this.props.person.snippet.thumbnails.default.url}/>
        </div>
        <div className="person-name">{ this.props.person.snippet.title}</div>
      </NavLink>
    );
  }
}
