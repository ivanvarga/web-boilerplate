/* global document */

import React from 'react';

class AddPostButton extends React.Component {
  constructor(props) {
    super();
    this.handleClick = props.handleClick.bind(this);
  }
  render() {
    return (
      <button onClick={this.props.handleClick}> New post</button>
    );
  }
}

AddPostButton.propTypes = {
  handleClick: React.PropTypes.func.isRequired,
};

export default AddPostButton;
