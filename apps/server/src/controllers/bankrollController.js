const {Bankroll} = require('../models');
const mongoose = require('mongoose');

module.exports = {
    async updateBankroll(req, res) {
        try {
            console.log(req.body);
            const bankroll = await Bankroll.findOneAndUpdate(
                {_id: new mongoose.Types.ObjectId(req.body.id) },
                { $set: req.body},
                {new: true}
            );
            if (!bankroll) {
                return res.status(404).json({ message: 'No Bankroll found'});
            }
            console.log(bankroll)
            res.json('Bankroll Updated!');
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
};