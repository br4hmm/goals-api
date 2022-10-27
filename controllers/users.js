const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const genToken = id => jwt.sign({ id }, process.env.JWT_SECRET);

const signup = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400);
    throw new Error('Please add all fields!');
  }

  if (username.length < 4) {
    res.status(400);
    throw new Error('Minimum username length is 4');
  }

  if (password.length < 8) {
    res.status(400);
    throw new Error('Minimum username length is 8');
  }

  const userExists = await User.findOne({ username });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists!');
  }

  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({ username, password: hashedPassword });

  if (user) {
    res.status(201).json({
      id: user._id,
      username: user.username,
      token: genToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      res.status(200).json({
        id: user._id,
        username: user.username,
        token: genToken(user._id),
      });
    } else {
      res.status(400);
      throw new Error('Wrong Password!');
    }
  } else {
    res.status(400);
    throw new Error('Wrong Username!');
  }
};

const getUser = (req, res) => {
  res.status(200).json(req.user);
};

module.exports = {
  signup,
  login,
  getUser,
};
