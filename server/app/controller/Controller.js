class Controller {

    toJson(data) {
        return JSON.stringify(data, null, 2);
    }
}

module.exports = Controller;