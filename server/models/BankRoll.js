const { Schema, model } = require("mongoose");

const bankRollSchema = new Schema({
  startAmount: {
    type: Int,
    required: true,
  },
  currentAmount: {
    type: Int,
    required: true,
  },
});
// bankroll x
// start x
// current x

// ability to add
// ability to subract
// win/loss by duration 1m 4m 6m 1y (graph for each)
const BankRoll = model("BankRoll", bankRollSchema);

module.exports = BankRoll;
