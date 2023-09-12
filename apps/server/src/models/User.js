const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
      'Must match an email address!',
    ],
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
