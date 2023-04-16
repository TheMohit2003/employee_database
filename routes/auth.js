//under progress , not integrated into the main codebase

const express = require('express');
const app = express();
const auth = require('../middlewares/authentiacate');
const router = express.Router();
const { login, register } = require('../controllers/authController.js');

router.route('/register').post(register);
router.route('/login').post(login);

module.exports = router;
