const mongoose = require('mongoose');

/* Documentation at:
 * https://mongoosejs.com/docs/index.html */

const UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    favouriteCookie: String,
    favouriteBoardGame: String
});

module.exports = mongoose.model('User', UserSchema);
