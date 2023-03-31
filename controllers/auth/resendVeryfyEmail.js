const { User } = require('../../models/users');
const { HttpError, sendEmail} = require('../../helpers');
const {BASE_URL}= process.env


const resendVeryfyEmail = async (req, res) => {
    const {email} = req.body
    const user = await User.findOne({email})
    if(!user) {
        throw HttpError(404,'User not found')
    }

     if(user.verify) {
        throw HttpError(404,'User not found')
    }
    const verifyEmail = {
        to: email,
        subject: "Verify email",
        html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${user.verificationToken}">Click verify email</a>`
    };

    await sendEmail(verifyEmail);

    res.json({
        message: 'Verification successful',
    })
}

module.exports = resendVeryfyEmail 