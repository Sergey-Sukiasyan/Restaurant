const RestaurantService = require("../services/RestaurantService");
const Controller = require("./Controller");
const ApiError = require('../exception/ApiError');
const addNewRestaurantValidation = require('../validaton/addNewRestaurantValidation');

class RestaurantController extends Controller {
    constructor() {
        super();
    }

    async showAll(req, res) {
        try {
            const restaurants = await RestaurantService.showAll();

            res.json(restaurants);
        } catch(e) {
            ApiError.InternalServerError(res, e.message);
        }
    }

    async showOne(req, res) {
        try{
            const id = req.params.id;
            const restaurant = await RestaurantService.showOne(id);

            res.json(restaurant);
        } catch (e) {
            ApiError.InternalServerError(res, e.message);
        }
    }

        async addNewRestaurant(req, res) {
            try{
                const error = addNewRestaurantValidation(req.body);

                if(Object.keys(error).length) {
                    return res.json({ error });
                }

                const result = await RestaurantService.addNewRestaurant(req.body, req.files);

                return res.json(result);
            } catch (e) {
                ApiError.InternalServerError(res, e.message);
            }
        }
}

module.exports = new RestaurantController();