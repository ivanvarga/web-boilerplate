const express = require('express');

const app = express();

const port = 5000;
/* eslint-disable no-console */
app.listen(port, () => {
  console.log('running server on port:{port}');
});
/* eslint-enable no-console */
