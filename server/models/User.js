const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

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
      "Must match an email address!",
    ],
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  BankRoll: {},
  sessions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Session",
    },
  ],
});
// users will have
// email x
// username x
// password x

// sessions/ sessions will have
// buy in
// out for
// win/loss
// stakes
// game type

// bankroll
// start
// current
// ability to add
// ability to subract
// win/loss by duration 1m 4m 6m 1y (graph for each)
