const app = require('./app');
const fileupload = require('express-fileupload');

app.use(fileupload());