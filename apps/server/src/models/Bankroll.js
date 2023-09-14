const mongoose = require('mongoose');
const { Schema } = mongoose;

const bankrollSchema = new Schema({
  bankroll: {
    type: Number,
    required: true,
  },
});

// add money to bankroll total
// subtract money from bankroll total
// update bankroll total based in +- of sessions
const Bankroll = mongoose.model('Bankroll', bankrollSchema);

module.exports = Bankroll;
