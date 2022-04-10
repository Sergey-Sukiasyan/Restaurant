const express = require('express');
const app = require('./app.js');

app.use(express.static('storage'));