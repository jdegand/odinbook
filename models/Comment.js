const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  authorId: {type: Schema.Types.ObjectId, ref: 'User'},
  postId: {type: Schema.Types.ObjectId, ref: 'Post'},
  content: {type: String, required: true},
  date: {type: Date, default: Date.now(), required: true},
  likes: {type: Number}
});

module.exports = mongoose.model('Comment', CommentSchema);