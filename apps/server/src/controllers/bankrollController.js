const {Bankroll} = require('../models');
const mongoose = require('mongoose');

module.exports = {
    async getBankroll(req, res) {
        try {
            console.log(req.query);
            let bankroll = await Bankroll.findOne({userID: req.query.id});
            if(!bankroll) { bankroll = await Bankroll.create({userID: req.query.id})}
            res.json(bankroll);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    
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