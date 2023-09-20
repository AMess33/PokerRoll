const { Bankroll } = require('../models');

module.exports = {
  async updateBankroll(req, res) {
    try {
      const bankroll = await Bankroll.findOneAndUpdate(
        { _id: req.params.bankrollId },
        { $set: req.body }
      );
      if (!bankroll) {
        return res.status(404).json({ message: 'Bankroll not found' });
      }
      console.log(bankroll);
      res.json('Bankroll Updated Sucessfully');
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
};
