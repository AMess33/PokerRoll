const mongoose = require('mongoose');
const { Schema } = mongoose;

const sessionSchema = new Schema({
  game: {
    type: String,
    required: true,
    max_length: 50,
  },
  buyIn: {
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
  inFor: {type: Number,},
  outFor: { type: Number,},
  // format start and end times for easy calculations in duration and plus minus (ie. 1.5 hours/ 1 decimal)
  startTime: { type: Date, default: Date.now },
  endTime: { type: Date, },
  duration: {type: Number,},
  // duration of session, difference of end and start times
  plusMinus: {type: Number,},
  note: {type: String,},
});

// start new session
// require game, title, casino, location, infor, start time

// update session
// add outFor number, end time, note

// session should update bankroll total when finished, and calculate plus minus for the session

const Session = mongoose.model('Session', sessionSchema);

const handleError = (err) => console.error(err);

module.exports = Session;
