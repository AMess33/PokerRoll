const mongoose = require('mongoose');
const { Schema } = mongoose;

const bankrollSchema = new Schema({
  bankroll: {
    type: Number,
    required: true,
  },
});

const Bankroll = mongoose.model('Bankroll', bankrollSchema);

module.exports = Bankroll;
