// const router = require('express').Router();
// const userRoutes = require('./userRoutes');

// router.use('/users', userRoutes);

// module.exports = router;

// move this code to server/src/main.js
const router = require('express').Router();

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


module.exports = router;
