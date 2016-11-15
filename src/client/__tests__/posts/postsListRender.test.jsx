/* global test expect mock*/

import React from 'react';

import { shallow, mount } from 'enzyme';

import { PostsList, Posts, Post, AddPostButton } from '../../app/components/posts/index';

test('PostsList renders Posts', () => {
  const list = shallow(
    <PostsList />,
  );
  expect(list.find(Posts).length).toBe(1);
});

test('PostsList renders posts within Posts ', () => {
  const posts = [1, 2, 3];
  const list = mount(
    <PostsList posts={posts} />,
  );
  expect(list.find(Post).length).toBe(posts.length);
});

test('PostsList renders one post more on AddPostButton click ', () => {
  const posts = [1, 2, 3];
  const list = mount(
    <PostsList posts={posts} />,
  );
  const initialPostCount = list.find(Post).length;

  const addPostButoon = list.find(AddPostButton);
  let finalPostCount;

  addPostButoon.simulate('click');
  finalPostCount = list.find(Post).length;
  expect(finalPostCount).toBe(initialPostCount + 1);
  addPostButoon.simulate('click');
  finalPostCount = list.find(Post).length;
  expect(finalPostCount).toBe(initialPostCount + 2);
});

