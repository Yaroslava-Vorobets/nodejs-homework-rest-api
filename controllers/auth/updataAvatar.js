const path = require('path');
const fs = require('fs/promises');
const { User } = require('../../models/users');
const Jimp = require("jimp");



const dirAvatar= path.join(__dirname, '../',  '../', 'public', 'avatars')

const updateAvatar = async (req, res,) => {
    const { _id } = req.user;

    const { path: tempUpLoad, originalname } = req.file;

    const filename = `${_id}_${originalname}`
    const resultUpLoad = path.join(dirAvatar, filename);   

    const image = await Jimp.read( tempUpLoad);
    image.resize(250, 250);
    image.write( tempUpLoad);
    
    await fs.rename(tempUpLoad, resultUpLoad);
    const avatarURL = path.join('avatars', filename);
    await User.findByIdAndUpdate(_id, { avatarURL })
    
    res.json({
        avatarURL,
    })
}

module.exports = updateAvatar