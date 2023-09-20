const router = require('express').Router();

const { createUser } = require('../../controllers/userController');
const { updateBankroll } = require('../../controllers/bankrollController');

router.route('/').post(createUser);

router.route('/').put(updateBankroll);

module.exports = router;
