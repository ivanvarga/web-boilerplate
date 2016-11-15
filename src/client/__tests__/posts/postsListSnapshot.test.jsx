/* global test expect mock*/

import renderer from 'react-test-renderer';

import React from 'react';

import { PostsList } from '../../app/components/posts/index';

test('PostsList renders correctly', () => {
  const list = renderer.create(
    <PostsList />,
  ).toJSON();
  expect(list).toMatchSnapshot();
});


