const { Session, Bankroll } = require('../models');
const mongoose = require('mongoose');
// get logged in users sessions X
// create session X
// update session X

// get any active sessions (sessions without an end time)
// post with additional data (end time, out for, plus minus calculated, notes)

module.exports = {
  async createSession(req, res) {
    try {
      const session = await Session.create(req.body);
      res.json(session);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateSession(req, res) {
    // need to create a new bankroll entry when a session is completed
    // get most recent bankroll entry
    // figure out how to access the PLUS/MINUS on the session
    // create new bankroll with previous bankroll + PLUS/MINUS
    try {
      const session = await Session.findOneAndUpdate(
        { _id: new mongoose.Types.ObjectId(req.body.id) },
        { $set: { ...req.body, endTime: Date.now() } },
        { new: true }
      );
      console.log(session);
      if (!session) {
        return res.status(404).json({ message: 'No session with this id!' });
      }
      let bankroll = await Bankroll.findOne(
        // find most recent bankroll with the userID
        { _id: new mongoose.Types.ObjectId(req.body.id) },
        {},
        { sort: { timeStamp: -1 } }
      );
      console.log(bankroll);
      if (!bankroll) {
        return res.status(404).json({ message: 'No Bankroll Found' });
      }
      const plusMinus = req.body.buyIn + req.body.outFor;
      const newAmount = bankroll.amount + plusMinus;
      const newBankroll = await Bankroll.create({
        userID: req.body.id,
        amount: newAmount,
      });
      console.log(newBankroll);
      res.json('Bankroll Updated!');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async getAllSessions(req, res) {
    try {
      let sessions = await Session.find(
        { userID: req.query.id },
        {},
        { sort: { startTime: -1 } }
      );
      let ResponseSessions = sessions.map((session) => {
        return {
          ...session._doc,
          duration: () => null,
          plusMinus: () => null,
        };
      });
      res.json(ResponseSessions);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
