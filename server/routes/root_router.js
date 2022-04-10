const app = require('../config/app');
const restaurantRouter = require('./restaurant');
const feedbackRouter = require('./feedback');

app.use(restaurantRouter);
app.use(feedbackRouter);
