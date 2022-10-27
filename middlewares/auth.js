const jwt = require('jsonwebtoken');
const User = require('../models/User');

const reqAuth = async (req, res, next) => {
  const auth = req.headers.authorization;
  let token;

  if (auth && auth.startsWith('Bearer')) {
    token = auth.split(' ')[1];
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(payload.id).select('-password');
  }

  if (!token) {
    res.status(401).json({ message: 'Not Authorized!, No Token' });
  }

  next();
};

module.exports = { reqAuth };
