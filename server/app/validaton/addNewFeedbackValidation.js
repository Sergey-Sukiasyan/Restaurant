const { body } = require('express-validator');

module.exports = [
    body('comment')
        .notEmpty()
        .withMessage('The filed is required')
];