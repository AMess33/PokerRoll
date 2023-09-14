const mongoose = require('mongoose');
const Session = require('./Session');
const Bankroll = require('./Bankroll');
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
    minLength: 8,
    match: [
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      'Must contain at least 8 characters with one lowercase and one uppercase letter',
    ],
  },
  bankroll: {
    type: Schema.Types.ObjectId,
    ref: 'Bankroll',
  },
  sessions: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Session',
    },
  ],
});

// add new user
//

const User = mongoose.model('User', userSchema);

module.exports = User;
