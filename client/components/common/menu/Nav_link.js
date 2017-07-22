import React, {Component} from 'react';
import classNames from 'classnames'
import { NavLink } from 'react-router-dom';

export default class NavLinkComponent extends Component {
  render() {
    const { size, icon, title, notification, value, priority, className, to} = this.props

    let iconClasses = classNames({
      "link_icon": true,
      "pt-icon-large": (size === 'large'),
      "pt-icon-standard": (size != 'large'),
    }, `pt-icon-${icon}`);

    let linkClasses = classNames({
      "priority-low": (priority === 'low')
    }, className)

    return (
      <div className="link_wrapper">
        <NavLink
          to={to}
          title={title}
          className={linkClasses}
          activeClassName='active'
          >
            <span className={iconClasses}></span>
            <span className="link_title">{title}</span>
            {value ? <div className="link_value_wrapper"><span className="link_value">{value}</span></div> : ''}
            {notification ? <span className="notificiation_icon"></span> : ''}
        </NavLink>
      </div>
    )
  }
}
