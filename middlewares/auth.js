const jwt = require('jsonwebtoken');
const User = require('../models/User');

const reqAuth = async (req, res, next) => {
  const auth = req.headers.authorization;
  let token;

  if (auth && auth.startsWith('Bearer')) {
    try {
      token = auth.split(' ')[1];
      const payload = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(payload.id).select('-password');
      next();
    } catch (err) {
      res.status(401);
      throw new Error('Not Authorized');
    }
  }

  if (!token) {
    res.status(401);
    throw new Error('Not Authorized, No Token');
  }
};

module.exports = { reqAuth };
