const { User } = require('../../models/users');

const logout = async (req, res) => {
    const { _id } = req.user;
    await User.findByIdAndUpdate(_id,{ token: "" }) 
    
    res.json({
        message: "Logout success"
    })
}

module.exports = logout