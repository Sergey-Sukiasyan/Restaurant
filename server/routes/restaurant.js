const RestaurantController = require('../app/controller/RestaurantController');

const router = require('express').Router();

router.get('/restaurants', RestaurantController.showAll);
router.get('/restaurant/:id', RestaurantController.showOne);

module.exports = router;