const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FriendRequestSchema = new Schema({
  self: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  status: {type: String, enum: ['Pending', 'Reject', 'Accept'], default: 'Pending', required: true},
});

module.exports = mongoose.model('FriendRequest', FriendRequestSchema);