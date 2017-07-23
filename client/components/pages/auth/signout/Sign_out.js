import React, {PropTypes} from 'react';

export default class SignOut extends React.Component {
  componentDidMount() {
    this.props.logout()
  }

  render() {
    return (<div></div>);
  }
}
