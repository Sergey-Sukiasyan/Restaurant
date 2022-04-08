const app = require('./app.js');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv').config();

app.use(cookieParser(process.env.COOIE_SECRET));