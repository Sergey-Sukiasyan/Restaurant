const app = require('./app.js');
const csrf = require('csurf');

app.use(csrf());