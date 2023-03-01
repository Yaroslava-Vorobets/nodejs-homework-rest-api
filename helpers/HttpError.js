const HttpError = (status, error) => {
    error = new Error(message);
    error.status = status;
    return error;
}

module.exports = HttpError;