const errorMessageList = require('./errorMessageList')


const HttpError = (status, message= errorMessageList[status] ) => {
    const error = new Error(message);
    error.status = status;
    return error;
}

module.exports = HttpError;