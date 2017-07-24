import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import AwaitingVideos from '../../../containers/pages/library/Awaiting_videos';
import AwaitingSingleVideo from '../../../containers/pages/library/Awaiting_single_video';
import PublishedVideos from './Published_videos';
import Menu from '../../common/menu/Menu'

class Library extends Component {

  handleRedirect() {
    if(this.props.match.url === '/library/' && this.props.match.isExact){
      this.props.history.push('/library/video/awaiting')
    }
  }
  componentDidMount() {
    this.handleRedirect()
  }
  componentDidUpdate() {
    this.handleRedirect()
  }

  render() {
    const videoCount = this.props.videos.items.length
    let libraryVideoMenu = {
      name: "library-video-menu",
      orientation: "vertical",
      links: [
        {
          to: "/library/video/awaiting",
          title: "Ожидают Публикации",
          icon: "time",
          value: videoCount
        },
        {
          to: "/library/video/published",
          title: "Опубликованные",
          icon: "export",
          value: 0
        },
      ]
    }

    return(
        <div className="page-container page-library">
          <Helmet title="Мой Контент – Hype DNA" />

          <div className="navigation-sidebar">

            <div className="sidebar-header">
              <span className="pt-icon pt-icon-folder-close page-icon"/>
              <h1 className="page-title">Мой Контент</h1>
            </div>

            <div className="sidebar-menu-container">
              <h2 className="menu-title">Видео</h2>
              <Menu menu={libraryVideoMenu}/>
            </div>
          </div>

          <div className="page-content">
            <Switch>
              <Route path="/library/video/awaiting" exact component={AwaitingVideos} />
              <Route path="/library/video/awaiting/:id" exact component={AwaitingSingleVideo} />
              <Route path="/library/video/published" exact component={PublishedVideos} />
            </Switch>
          </div>

        </div>
      );
  }
}

export default Library;
