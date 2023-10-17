
const router = require('express').Router();

const {
  createSession,
  updateSession,
} = require('../controllers/sessionContorller');

const {
  updateBankroll,
  getBankroll,
  getAllBankroll,
} = require('../controllers/bankrollController');

// test route
router.route('/').get((req, res) => {
  res.send('Hello World');
});
router.route('/session').post(createSession);

router.route('/session').put(updateSession);

router.route('/bankroll').get(getBankroll);

router.route('/bankroll').post(updateBankroll);

router.route('/allbankroll').get(getAllBankroll);


module.exports = router;
