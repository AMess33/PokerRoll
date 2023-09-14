const mongoose = require('mongoose');
const { Schema } = mongoose;

const sessionSchema = new Schema({
  game: {
    type: String,
    required: true,
    max_length: 50,
  },
  title: {
    type: String,
    required: true,
    max_length: 50,
  },
  casino: {
    type: String,
    required: true,
    max_length: 50,
  },
  location: {
    type: String,
    required: true,
    max_length: 50,
  },
  inFor: Number,
  outFor: Number,
  // duration of session, difference of end and start times
  date: { type: Date, default: Date.now },
  plusMinus: Number,
  note: String,
});

// start new session
// require game, title, casino, location, infor, start time

// update session
// add outFor number, end time, note

// session should update bankroll total when finished

const Session = mongoose.model('Session', sessionSchema);

const handleError = (err) => console.error(err);

module.exports = Session;
