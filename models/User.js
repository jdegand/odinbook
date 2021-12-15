const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
  requests: [{type: Schema.Types.ObjectId, ref: 'FriendRequest'}],
});

const User = mongoose.model('User', UserSchema);

module.exports = User;