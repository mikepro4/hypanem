import React, { Component, PropTypes } from 'react';
import { Route, Link, Switch, Redirect, NavLink } from 'react-router-dom';
import { Button } from "@blueprintjs/core";
import Menu from '../../common/menu/Menu'

class AppHeader extends Component {
  componentDidMount() {
  }

  render() {
    let menu = {
        name: "app-header-menu",
        orientation: "horizontal",
        links: [
          {
            to: "/home",
            title: "Главная",
            icon: "home",
          },
          {
            to: "/trends",
            title: "Тренды",
            icon: "trending-up",
          },
          {
            to: "/videos",
            title: "Видео",
            icon: "mobile-video",
          },
          {
            to: "/topics",
            title: "Темы",
            icon: "citation",
          },
          {
            to: "/people",
            title: "Люди",
            icon: "people",
          }
        ]
      }

    return(
        <header className="app-header">
          <div className="app-logo-container">
            <NavLink
              to='/home'
              title="Hype DNA"
              className="app-logo"
              >
              HYPEDNA
            </NavLink>
          </div>
          <Menu menu={menu}  />
        </header>
    );
  }
}

export default AppHeader;
