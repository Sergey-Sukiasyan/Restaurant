
const router = require('express').Router();
const FeedbackController = require('../app/controller/FeedbackController');

router.post('/add_new_feedback/:id', FeedbackController.add_new_feedback);

module.exports = router;