const mongoose = require('mongoose');
const { Schema } = mongoose;

const bankrollSchema = new Schema({
    userID: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
        default: 0,
    },
    timeStamp: {
        type: Date,
        required: true,
        default: Date.now,
    }
});

const Bankroll = mongoose.model('Bankroll', bankrollSchema);

module.exports = Bankroll;
