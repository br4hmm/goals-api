const errorHandler = (err, req, res, next) => {
  console.log(err.message);
  res.status(500).json({ message: 'Something went worng' });
};

module.exports = errorHandler;
