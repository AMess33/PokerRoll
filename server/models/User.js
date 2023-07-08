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
userSchema.pre("save", async function (next) {
  if (this.IsNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model("User", userSchema);

module.exports = User;
