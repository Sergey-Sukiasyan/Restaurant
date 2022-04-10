const { body } = require('express-validator');

// module.exports = [
//     body('name')
//         .notEmpty()
//         .withMessage('The filed is required'),
//
//     body('address')
//         .notEmpty()
//         .withMessage('The filed is required'),
//
//     body('tariff')
//         .isNumeric()
//         .withMessage('Latitude must contain a number')
//         .notEmpty()
//         .withMessage('The filed is required'),
//
//     body('info')
//         .notEmpty()
//         .withMessage('The filed is required'),
//
//     body('latitude')
//         .isNumeric()
//         .withMessage('Latitude must contain a number')
//         .notEmpty()
//         .withMessage('The filed is required'),
//
//     body('longitude')
//         .isNumeric()
//         .withMessage('Latitude must contain a number')
//         .notEmpty()
//         .withMessage('The filed is required'),
// ];


module.exports = function (data) {
    console.log(data);
    return {

    }
}