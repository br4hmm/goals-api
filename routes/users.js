const { Router } = require('express');
const router = Router();

const { signup, login, getUser } = require('../controllers/users');

router.post('/signup', signup);
router.post('/login', login);
router.get('/user', getUser);

module.exports = router;
