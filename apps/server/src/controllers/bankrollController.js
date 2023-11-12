const { Bankroll } = require('../models');
const mongoose = require('mongoose');

module.exports = {
  async getBankroll(req, res) {
    try {
      let bankroll = await Bankroll.findOne(
        { userID: req.query.id },
        {},
        { sort: { timeStamp: -1 } }
      );
      if (!bankroll) {
        bankroll = await Bankroll.create({ userID: req.query.id });
      }
      res.json(bankroll);
    } catch (err) {
      res.status(500).json(err);
    }
  },

  async getAllBankroll(req, res) {
    try {
      let bankroll = await Bankroll.find(
        { userID: req.query.id },
        {},
        { sort: { timeStamp: 1 } }
      );
      res.json(bankroll);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // find most recent bankroll X
  // add or subtract an amount from recent X
  // create new bankroll with updated amount X

  async updateBankroll(req, res) {
    try {
      let bankroll = await Bankroll.findOne(
        { userID: req.body.id },
        {},
        { sort: { timeStamp: -1 } }
      );
      if (!bankroll) {
        return res.status(404).json({ message: 'No Bankroll found' });
      }
      const newAmount = bankroll.amount + req.body.amount;
      const newBankroll = await Bankroll.create({
        userID: req.body.id,
        amount: newAmount,
      });

      res.json('Bankroll Updated!');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
