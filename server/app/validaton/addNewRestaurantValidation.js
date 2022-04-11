const Validator = require('validatorjs');

module.exports = function (data) {
    let rules = {
        name: 'required',
        address: 'required',
        tariff: 'required|numeric',
        info: 'required',
        latitude: 'required|numeric',
        longitude: 'required|numeric'
    };

    let validation = new Validator(data, rules);

    validation.fails();

    return validation.errors.errors;
}