const Controller = require("./Controller");

class RestaurantController extends Controller {
    constructor() {
        super();
    }

    showAll(req, res) {
        res.json('asd');
    }
}

module.exports = new RestaurantController();