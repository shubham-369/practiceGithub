const express = require('express');
const app = express();

app.use('/', (req, res) => {
    res.send('<h1> first commit on github </h1>');
});

app.listen(4000, () => {
    console.log('server is running');
});