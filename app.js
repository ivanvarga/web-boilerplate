const express = require('express');

const app = express();

const port = 5000;

app.use(express.static('public'));
app.use(express.static('src/views'));
app.get('/', (req, res) => {
    res.send('Hello World');
});
/* eslint-disable no-console */
app.listen(port, () => {
    console.log(`New server started on port:${port}`);
});
/* eslint-enable no-console */
