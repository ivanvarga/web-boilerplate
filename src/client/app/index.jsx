/* global document */

import React from 'react';
import { render } from 'react-dom';
import { PostsList } from './components/posts/index';

function App() {
  return (
    <div>
      <p> Hello React!</p>
      <PostsList />
    </div>
  );
}

render(<App />, document.getElementById('app'));
