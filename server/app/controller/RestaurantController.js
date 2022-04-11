const RestaurantService = require("../services/RestaurantService");
const Controller = require("./Controller");
const addNewRestaurantValidation = require('../validaton/addNewFeedbackValidation');

class RestaurantController extends Controller {
    constructor() {
        super();
    }

    async showAll(req, res) {
        try {

            const restaurants = await RestaurantService.showAll();

            res.json(restaurants);
        } catch(e) {
            console.log(e);
        }
    }

    async showOne(req, res) {
        try{

            const id = req.params.id;

            const restaurant = await RestaurantService.showOne(id);

            res.json(restaurant);
        } catch (e) {
            console.log(e);
        }
    }

        async addNewRestaurant(req, res) {
            try{
                console.log(addNewRestaurantValidation(req.body));

                await RestaurantService.addNewRestaurant(req.body, req.file);

                return res.json(true);
            } catch (e) {
                console.log(e);
            }
        }
}

module.exports = new RestaurantController();