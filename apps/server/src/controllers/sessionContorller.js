const { Session } = require('../models');
const mongoose = require('mongoose');
// get logged in users sessions
// create session
// update session
// dont think i want the ability to delete a session

module.exports = {
  async createSession(req, res) {
    try {
      console.log(req.body);
      const session = await Session.create({userID: req.body.id, buyIn: req.body.buyIn, game: req.body.game, casino: req.body.casino, location: req.body.location});
      res.json(session);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  async updateSession(req, res) {
    try {
      const session = await Session.findOneAndUpdate(
        { _id: new mongoose.Types.ObjectId(req.body.id) },
        { $set: req.body },
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
  async getAllSessions( req, res) {
    try {
      let session = await Session.find({userID: req.query.id}, {}, { sort: {'startTime' : -1}});
      res.json(session);
    } catch (err) {
      res.status(500).json(err);
    }
  }
};
