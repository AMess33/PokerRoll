
const router = require('express').Router();

const {
  createSession,
  updateSession,
} = require('../controllers/sessionContorller');

const {
  updateBankroll,
} = require('../controllers/bankrollController');

// test route
router.route('/').get((req, res) => {
  res.send('Hello World');
});
router.route('/session').post(createSession);

router.route('/session').put(updateSession);

router.route('/bankroll').put(updateBankroll);


module.exports = router;
