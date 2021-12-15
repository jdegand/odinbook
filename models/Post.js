const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  body: {type: String, required: true},
  likes: { type: Number, default: 0 },
  author: { type: Schema.Types.ObjectId, ref: 'User' },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }],
});

module.exports = mongoose.model('Post', PostSchema);