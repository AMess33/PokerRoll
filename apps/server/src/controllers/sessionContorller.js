const { User, Session } = require('../models');

// get logged in users sessions
// create session
// update session
// dont think i want the ability to delete a session

module.exports = {
  async createSession(req, res) {
    try {
      const session = await Session.create(req.body);
      res.json(session);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
