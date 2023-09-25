// const router = require('express').Router();
// const userRoutes = require('./userRoutes');

// router.use('/users', userRoutes);

// module.exports = router;

// move this code to server/src/main.js
const router = require('express').Router();
const { createUser, deleteUser } = require('../controllers/userController');
const { updateBankroll } = require('../controllers/bankrollController');
const {
  createSession,
  updateSession,
} = require('../controllers/sessionContorller');

// test route
router.route('/').get((req, res) => {
  res.send('Hello World');
});
router.route('/user/session').post(createSession);

router.route('/user/session').put(updateSession);
router.route('/user').post(createUser);
router.route('/user').delete(deleteUser);

router.route('/user').put(updateBankroll);

module.exports = router;
