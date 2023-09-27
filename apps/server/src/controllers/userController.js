const { User } = require('../models');
const mongoose = require('mongoose');

module.exports = {
  // create a new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // update a user
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        {
          _id: new mongoose.Types.ObjectId(req.body.id),
        },
        { $set: req.body },
        { new: true }
      );

      if (!user) {
        return res
          .status(404)
          .json({ message: 'No user found, unable to update' });
      }
      return res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Delete a user
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({
        _id: new mongoose.Types.ObjectId(req.body.id),
      });
      console.log(req.body.id);

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }
      return res({ message: 'User Deleted' });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  //   delete all users session and bankroll when user deleted?
  // auth middleware needed to verify user/password
};
