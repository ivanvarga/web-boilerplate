/* global document */

import React from 'react';

function Post(props) {
  return (<div>{props.data}</div>);
}

Post.propTypes = {
  data: React.PropTypes.number,
};

export default Post;
