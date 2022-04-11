const Validator = require('validatorjs');

module.exports = function (data) {
    let rules = {
        comment: 'required',
    };

    let validation = new Validator(data, rules);

    validation.fails();

    return validation.errors.errors;
}