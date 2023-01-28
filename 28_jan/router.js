const express = require('express');
const app = express();
const timeFunction = require('./index')
app.get('/time',timeFunction.getTime);
module.exports = app;