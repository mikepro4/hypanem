import React, {PropTypes} from 'react';
import { Route, Link, Switch, Redirect, NavLink } from 'react-router-dom';
import { Button, Intent, Popover, PopoverInteractionKind, Position, Menu, MenuItem, MenuDivider } from "@blueprintjs/core";
import MenuComponent from '../../common/menu/Menu'

export default class UserHeader extends React.Component {
  handleSignout() {
    this.props.history.push('/auth/signout')
  }
  handleSettingsClick() {
    this.props.history.push('/auth/profile/edit')
  }
  render() {
    let userMenu = {
      name: "auth-menu",
      orientation: "horizontal",
      links: [
        {
          to: "/add",
          title: "Добавить Видео",
          icon: "add",
        },
        {
          to: "/library",
          title: "Мой Контент",
          icon: "folder-close",
        },
      ]
    }

    return (
      <div className="user-header">
        <ul className="user-header-sections-container">
          <li className="user-header-section user-header-menu">
            <MenuComponent menu={userMenu}  />
          </li>

          <li className="user-header-section user-header-notifications">
            <span className="pt-icon pt-icon-notifications"/>
          </li>

          <li className="user-header-section user-header-username">
            <Popover
                interactionKind={PopoverInteractionKind.CLICK}
                position={Position.BOTTOM}
                isModal={true}
            >
              <div className="user-container">
                <div className="user-avatar"></div>
                <div className="user-info-wrapper">
                  <div className="username-container">{this.props.auth.user.username}</div>
                  <div className="user-status">
                    <span className="status-online"></span>
                    <span className="status-title">Online</span>
                  </div>
                </div>
                <span className="pt-icon pt-icon-caret-down username-caret"/>
              </div>

              <div>
                <Menu>
                  <MenuItem
                      iconName="cog"
                      text="Настройки"
                      onClick={this.handleSettingsClick.bind(this)}
                  />
                  <MenuDivider />
                  <MenuItem
                      text="Выйти"
                      iconName="log-out"
                      onClick={this.handleSignout.bind(this)}
                  />
                </Menu>
              </div>

           </Popover>
          </li>
        </ul>

        {/* <NavLink to='/auth/signout'>
          Выйти
        </NavLink> */}
      </div>
    );
  }
}
