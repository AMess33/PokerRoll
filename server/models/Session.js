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

// cashgame x
// buy in x
// out for x
// win/loss x
// stakes x
// game type x
// start time x
// end time x

const tournamentSchema = new Schema({
  buyIn: {
    type: Int,
    required: true,
  },
  bullets: {
    type: Int,
    required: true,
  },
  placment: {
    type: String,
    required: true,
  },
  winnings: {
    type: Int,
    required: true,
  },
});
// tournament x
// buy in x
// bullets x
// placement finish/out of x
// prize won x
