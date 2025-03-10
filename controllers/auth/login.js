const { User } = require('../../models/users');
const { HttpError, } = require('../../helpers');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = process.env;

const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        throw HttpError(401, "Email or password is wrong")
    }
    if (!user.verify) {
        throw HttpError(404, "User not found")
    }

    const passwordCompare = await bcrypt.compare(password, user.password)
    if (!passwordCompare) {
        throw HttpError(401, "Email or password is wrong")
    }

    const payload = {
        id: user._id
    }

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "2w" })
    await User.findByIdAndUpdate(user._id, {token}) 
    
    res.json({
        token
    })

}

module.exports = login