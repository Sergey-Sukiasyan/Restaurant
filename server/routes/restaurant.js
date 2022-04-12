const RestaurantController = require('../app/controller/RestaurantController');

const router = require('express').Router();

router.get('/restaurants', RestaurantController.showAll);
router.get('/restaurant/:id', RestaurantController.showOne);
router.post('/add_new_restaurant', RestaurantController.addNewRestaurant);

module.exports = router;