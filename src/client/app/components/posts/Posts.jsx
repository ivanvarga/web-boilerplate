/* global document */

import React from 'react';
import Post from './Post';

class Posts extends React.Component {
  render() {
    const posts = this.props.posts.map((post, i) => <Post data={post} key={i} />);
    return (
      <ul>
        {posts}
      </ul>
    );
  }
}

Posts.propTypes = {
  posts: React.PropTypes.arrayOf(React.PropTypes.number),
};

export default Posts;
