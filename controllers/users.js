const User = require('../models/User');
const bcrypt = require('bcrypt');

const signup = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({ id: user._id, username: user.username });
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      res.status(200).json({ id: user._id, username: user.username });
    } else {
      throw new Error('Wrong Password!');
    }
  } else {
    throw new Error('Wrong Username!');
  }
};

const getUser = (req, res) => {};

module.exports = {
  signup,
  login,
  getUser,
};
