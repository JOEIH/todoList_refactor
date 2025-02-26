const mongoose = require('mongoose');

const todoInfoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  isDone: {
    type: Boolean,
    required: true,
  }
}, {collection: 'todoInfo'})

const TodoInfo = mongoose.model('TodoInfo', todoInfoSchema)

module.exports = TodoInfo;