const { Session } = require('../models');
const mongoose = require('mongoose');
// get logged in users sessions X
// create session X
// update session X

// get any active sessions (sessions without an end time)
// post with additional data (end time, out for, plus minus calculated, notes)

module.exports = {
  async createSession(req, res) {
    try {
      console.log(req.body);
      const session = await Session.create(req.body);
      res.json(session);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateSession(req, res) {
    try {
      const session = await Session.findOneAndUpdate(
        { _id: new mongoose.Types.ObjectId(req.body.id) },
        { $set: { ...req.body, endTime: Date.now() } },
        { new: true }
      );
      if (!session) {
        return res.status(404).json({ message: 'No session with this id!' });
      }
      console.log(session);
      res.json('Session Updated Sucessfully');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async getAllSessions(req, res) {
    try {
      let session = await Session.find(
        { userID: req.query.id },
        {},
        { sort: { startTime: -1 } }
      );
      // import dayJS library to use for duration calculation
      let ResponseSession = {
        ...session,
        duration: () => null,
        plusMinus: () => null,
      };

      res.json(ResponseSession);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
