const express = require('express');

require('babel-register');

const path = require('path');

const app = express();

const port = 5000;

if (process.argv[2] === 'development') {
  app.get('/', (req, res) => {
    res.sendFile(path.join(path.resolve(__dirname, '../client/index-production.html')));
  });
} else {
  app.use('/', express.static(path.resolve(__dirname, '../client/public')));
  app.get('/', (req, res) => {
    res.sendFile(path.join(path.resolve(__dirname, '../client/index.html')));
  });
}


/* eslint-disable no-console */
app.listen(port, () => {
  console.log(`New servers started on port:${port}`);
});
/* eslint-enable no-console */
