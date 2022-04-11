const Controller = require("./Controller");
const FeedbackService = require('../services/FeedbackService');
const addNewFeedbackValidation = require('../validaton/addNewFeedbackValidation');

class FeedbackController extends Controller {
    constructor() {
        super();
    }

    async add_new_feedback(req, res) {
        try{
            const errors = addNewFeedbackValidation(req.body);
            if(Object.keys(errors).length) {
                return res.json({ errors });
            }

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