const { Schema, model } = require("mongoose");

const sessionSchema = new Schema({
  // gameType: {[cashgame | tournament]},
  casino: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

// sessions will have
// casino
// location
const cashGameSchema = new Schema({
  buyIn: {
    type: Int,
    required: true,
  },
  cashOut: {
    type: Int,
    required: true,
  },
  stakes: {
    type: String,
    required: true,
  },
  gameType: {
    type: String,
    required: true,
  },
  start: {
    // type: time,
    // required: true,
  },
  endTime: {
    // type: time,
    // required: true,
  },
  winLoss: {
    type: Int,
    required: true,
  },
});
// cash game or tournament

// cashgame
// buy in
// out for
// win/loss
// stakes
// game type
// start time
// end time

// tournament
// buy in
// bullets
// placement finish/out of
// prize won
