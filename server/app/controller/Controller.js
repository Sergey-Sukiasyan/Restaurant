class Controller {

    toJson(data) {
        return JSON.stringify(data, null, 2);
    }

    validationErrors({errors}) {
        const new_errors = {};

        errors.forEach(err => new_errors[err.param] = err.msg);

        return new_errors;
    }
}

module.exports = Controller;