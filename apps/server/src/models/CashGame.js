const mongoose = require('mongoose');
const { Schema } = mongoose;

const sessionSchema = new Schema({
  game: String,
  title: String,
  casino: String,
  location: String,
  inFor: Number,
  outFor: Number,
  // duration of session, difference of end and start times
  date: { type: Date, default: Date.now },
  plusMinus: Number,
});

const Session = mongoose.model('Session', sessionSchema);

const handleError = (err) => console.error(err);

module.exports = Session;
