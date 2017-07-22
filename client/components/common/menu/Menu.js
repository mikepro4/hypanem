import React, {Component} from 'react';
import classNames from 'classnames'
import { Link, browserHistory } from 'react-router';
import NavLinkComponent from './Nav_link'

export default class Menu extends Component {

  renderLinkList() {
    let large = this.props.menu.size === 'large';

    return this.props.menu.links.map((link, i) => {
     const {to, title, icon, notification, value, priority} = link;
     return (
       <li className="menu_list_item" key={i}>
         <NavLinkComponent
           to={to}
           className="nav_link"
           title={title}
           icon={icon}
           value={value}
           priority={priority}
           size={large? 'large': ''}
         />
       </li>
     );
    });
  }

  renderDividerTop() {
    if(this.props.menu.dividerTop) {
      return (
        <div className="menu_divider"></div>
      )
    }
  }

  renderDividerBottom() {
    if(this.props.menu.dividerBottom) {
      return(
        <div className="menu_divider"></div>
      )
    }
  }

  render(){
    let classes = classNames({
      "menu_nav": true,
      "menu_large": this.props.menu.size === "large",
      "vertical": this.props.menu.orientation === "vertical",
      "horizontal": this.props.menu.orientation === "horizontal",
    }, this.props.menu.className);

    return(
      <div className="menu_wrapper">
        {this.renderDividerTop()}
        <nav className={classes}>
          <ul className="menu_list">
            {this.renderLinkList()}
          </ul>
        </nav>
        {this.renderDividerBottom()}
      </div>
    )
  }
}
