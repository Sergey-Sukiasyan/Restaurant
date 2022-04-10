const Feedback = require('../../models').Feedback;

class FeedbackService {
    async addFeedback(id, data) {
        return await Feedback.create({ restaurant_id: id, ...data });
    }
}

module.exports = new FeedbackService();