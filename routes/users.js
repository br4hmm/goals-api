const { Router } = require('express');
const router = Router();

const { signup, login, getUser } = require('../controllers/users');
const { reqAuth } = require('../middlewares/auth');

router.post('/signup', signup);
router.post('/login', login);
router.get('/me', reqAuth, getUser);

module.exports = router;
