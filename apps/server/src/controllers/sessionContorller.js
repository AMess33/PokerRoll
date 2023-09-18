const { User, Session } = require('../models');

// get logged in users sessions
// create session
// update session
// dont think i want the ability to delete a session

module.exports = {
  async createSession(req, res) {
    try {
      const session = await Session.create(req.body);
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { sessions: session._id } },
        { new: true }
      );
      if (!user) {
        return res.status(404).json({
          message: 'Session created, but found no user with that ID',
        });
      }
      console.log(session);
      res.json('New Session started');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async updateSession(req, res) {
    try {
      const session = await Session.findOneAndUpdate(
        { _id: req.params.sessionId },
        { $set: req.body }
      );
      if (!session) {
        return res.status(404).json({ message: 'No session with this id!' });
      }
      console.log(session);
      res.json('Session Updated Sucessfully');
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
