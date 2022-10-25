const User = require('../models/User');

const signup = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({ id: user._id, username: user.username });
};
const login = (req, res) => {};

const getUser = (req, res) => {};

module.exports = {
  signup,
  login,
  getUser,
};
