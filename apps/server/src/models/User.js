const mongoose = require('mongoose');
const Session = require('./Session');
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
      /^([a-z0-9_\\.-]+)@([\da-z\\.-]+)\.([a-z\\.]{2,6})$/,
      'Must be a valid email address!',
    ],
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
    match: [
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      'Must contain at least 8 characters with 1 lowercase and 1 uppercase letter',
    ],
  },
  bankroll: {
    type: Number,
    required: true,
    default: 0,
  },
  sessions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Session',
    },
  ],
});

// add new user
// delete user
// add session
// update session
// update bankroll

const User = mongoose.model('User', userSchema);

module.exports = User;
