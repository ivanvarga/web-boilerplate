/* global document */

import React from 'react';

import Posts from './Posts';

import AddPostButton from './AddPostButton';

let i = 3;

class PostsList extends React.Component {
  constructor(props) {
    super();
    this.state = { posts: props.posts || [1, 2, 3] };
    this.handleClick = this.handleClick.bind(this);
  }
  getPostsCount() {
    return this.state.posts.length;
  }
  handleClick() {
    const posts = this.state.posts;
    i += 1;
    posts.push(i);
    this.setState({ posts });
  }
  render() {
    return (
      <div>
        <AddPostButton handleClick={this.handleClick} />
        <Posts posts={this.state.posts} />
      </div>
    );
  }
}

PostsList.propTypes = {
  posts: React.PropTypes.arrayOf(React.PropTypes.number),
};

export default PostsList;
