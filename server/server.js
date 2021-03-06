'use strict';

const express = require('express');

// Constants
const PORT = 3080;
const HOST = 'localhost';

// App
const app = express();
app.get('/', (req, res) => {
    res.json({ username: 'Happytoad' })
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);