import router from './userRoutes';

const {
  createSession,
  updateSession,
} = require('../../controllers/sessionContorller');

router.route('/').post(createSession);

router.route('/').put(updateSession);
