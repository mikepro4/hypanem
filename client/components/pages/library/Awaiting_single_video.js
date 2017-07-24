import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';
import * as _ from 'lodash'
import AwaitingSingleVideoFormComponent from './Awaiting_single_video_form';

class AwaitingSingleVideo extends Component {

  // constructor(props) {
  //   super(props);
  //
  //   this.state = {
  //     paramId: this.props.match.params.id,
  //   };
  // }
  // componentDidMount() {
  //   this.props.loadVideo(this.state.paramId);
  // }
  //
  // componentWillUpdate() {
  //   this.props.loadVideo(this.state.paramId);
  // }

  handleFormSubmit({url}) {
  }


  render() {
    // console.log(this.props.videos)
    // const paramId = this.props.match.params.id
    // let filteredVideo
    // if(!_.isNil(this.props.videos.items)) {
    //
    //   const test = _.filter(this.props.videos.items, function(video) {
    //     return (video._id === paramId) ? true : false
    //   })
    //   filteredVideo = test[0]
    // }



    let myInitialValues = {
      initialValues: {
        url: this.props.singleVideo.url
      }
    }



    return(
        <div className="content-container">
          <Helmet title="Тренды – Hype DNA" />
          <h3 className="section-title">Single Video</h3>
          <AwaitingSingleVideoFormComponent {...myInitialValues} onSubmit={this.handleFormSubmit.bind(this)} />
        </div>
      );

  }
}

export default AwaitingSingleVideo;
