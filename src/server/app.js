const express = require('express');

require('babel-register');

const path = require('path');

const app = express();

const port = 5000;

app.use('/', express.static(path.resolve(__dirname, '../client/public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(path.resolve(__dirname, '../client/index.html')));
});
/* eslint-disable no-console */
app.listen(port, () => {
    console.log(`New server started on port:${port}`);
});
/* eslint-enable no-console */
