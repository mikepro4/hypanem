import React, {Component} from 'react';
import _ from 'lodash'
import classNames from 'classnames'
import Menu from './Menu'

export default class MenuGroup extends Component {

  getMenuLinks(name) {
    let menu = _.find(this.props.menus, {name: name})
    return menu.links
  }

  renderMenus(tag) {
    let filteredMenus= _.filter(this.props.menus, function(menu) {
      console.log(menu)
      let tags = _.filter(menu.tags, {name: tag})
      return (tags.length > 0) ? true: false
    })

    return filteredMenus.map((menu, i) => {
     return (
       <li className="single_menu" key={i}>
         <Menu
           key={i}
           menu={menu}
         />
      </li>
     );
    });
  }

  render() {
    return (
      <ul className="menu_group_wrapper">
        {this.renderMenus(this.props.menuTag)}
      </ul>
    );
  }
}
