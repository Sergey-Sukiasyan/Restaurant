const RestaurantController = require('../app/controller/RestaurantController');
const avatar_upload = require('../config/multer_uploads/avatar_upload');

const router = require('express').Router();

router.get('/restaurants', RestaurantController.showAll);
router.get('/restaurant/:id', RestaurantController.showOne);
router.post('/add_new_restaurant', RestaurantController.addNewRestaurant);

module.exports = router;