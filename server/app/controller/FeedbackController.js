const Controller = require("./Controller");
const FeedbackService = require('../services/FeedbackService');

class FeedbackController extends Controller {
    constructor() {
        super();
    }

    async add_new_feedback(req, res) {
        try{

            const id = req.params.id;
            const data = req.body;
            const new_feedback = await FeedbackService.addFeedback(id, data);

            res.json(new_feedback);
        } catch (e) {
            console.log(e);
        }
    }
}

module.exports = new FeedbackController();