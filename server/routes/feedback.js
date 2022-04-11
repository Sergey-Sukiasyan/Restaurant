
const router = require('express').Router();
const FeedbackController = require('../app/controller/FeedbackController');
const feedbackValidation = require('../app/validaton/addNewFeedbackValidation');

router.post('/add_new_feedback/:id', feedbackValidation, FeedbackController.add_new_feedback);

module.exports = router;