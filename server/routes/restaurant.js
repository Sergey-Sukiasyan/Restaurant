const RestaurantController = require('../app/controller/RestaurantController');

const router = require('express').Router();

router.get('/restaurant', RestaurantController.showAll);

module.exports = router;