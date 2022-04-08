const app = require('./app.js');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));