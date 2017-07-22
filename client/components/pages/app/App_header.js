import React, { Component, PropTypes } from 'react';
import { Route, Link, Switch, Redirect, NavLink } from 'react-router-dom';
import { Button } from "@blueprintjs/core";
import Menu from '../../common/menu/Menu'

class AppHeader extends Component {
  componentDidMount() {
  }

  render() {
    let mainMenu = {
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

    let authMenu = {
      name: "auth-menu",
      orientation: "horizontal",
      links: [
        {
          to: "/auth/signin",
          title: "Войти",
        },
        {
          to: "/auth/signup",
          title: "Зарегистрироваться",
        },
      ]
    }

    return(
        <header className="app-header">
          <div className="left-side">
            <div className="app-logo-container">
              <NavLink
                to='/home'
                title="Hype DNA"
                className="app-logo"
                >
                HYPEDNA
              </NavLink>
            </div>
            <Menu menu={mainMenu}  />
          </div>

          <div className="right-side">
            <Menu menu={authMenu}  />
          </div>
        </header>
    );
  }
}

export default AppHeader;
