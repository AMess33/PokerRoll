import router from '../../main';

const {
  createSession,
  updateSession,
} = require('../../controllers/sessionContorller');

router.route('/').post(createSession);

router.route('/').put(updateSession);
