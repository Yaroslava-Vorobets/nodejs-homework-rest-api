const {ctrlWrapper } = require('../../helpers');
const register = require("./register");
const login = require("./login");
const getCurrent = require("./getCurrent");
const logout = require("./logout");
const updateAvatar = require('./updataAvatar')
const verifyEmail = require('./verifyEmail')
const resendVeryfyEmail = require('./resendVeryfyEmail')


module.exports = {    
    register: ctrlWrapper(register),
    verifyEmail: ctrlWrapper(verifyEmail),
    resendVeryfyEmail: ctrlWrapper(resendVeryfyEmail),
    login: ctrlWrapper(login),    
    getCurrent: ctrlWrapper(getCurrent),
    logout: ctrlWrapper(logout),
    updateAvatar:ctrlWrapper(updateAvatar),
};