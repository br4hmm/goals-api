require('dotenv').config();
require('express-async-errors');

const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const goalsRoutes = require('./routes/goals');
const usersRoutes = require('./routes/users');
const errorHandler = require('./middlewares/error');

const app = express();
const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(app.listen(port, console.log(`Server is running on port ${port}...`)))
  .catch(err => {
    console.log(err);
    process.exit(1);
  });

if (process.env.NODE_ENV === 'development') app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/goals', goalsRoutes);

app.use(errorHandler);
app.use((req, res) => {
  res.status(404).json({ message: 'Resource not found!' });
});
