const errorHandler = (err, req, res, next) => {
  let code = 500;
  let message = err.message;

  if (message.includes('Goal validation')) {
    code = 400;
    message = err.errors.text.message;
  }

  res.status(code).json({ message });
};

module.exports = errorHandler;
