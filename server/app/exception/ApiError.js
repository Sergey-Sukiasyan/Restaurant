module.exports = class ApiError extends Error {
    status;
    message;

    constructor(status, message) {
        super(message);
        this.status = status;
        this.message = message;
    }

    static InternalServerError(res, message) {
        return res.status(500).json(new ApiError(500, message));
    }

    static BadRequest(res, message) {
        return res.status(400).json(new ApiError(400, message));
    }
}