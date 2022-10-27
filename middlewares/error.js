const errorHandler = (err, req, res, next) => {
  let code = 500;
  let message = err.message;

  if (err.code === 11000) {
    message = 'This username is already exists!';
  }

  if (message.includes('validation')) {
    code = 400;
    if (message.includes('text')) message = err.errors.text.message;
    if (message.includes('username')) message = err.errors.username.message;
    if (message.includes('password')) message = err.errors.password.message;
  }

  if (message.includes('invalid')) {
    code = 401;
  }

  res.status(code).json({ message });
};

module.exports = errorHandler;
