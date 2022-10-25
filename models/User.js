const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, 'Please add an username'],
      unique: true,
      minLength: [4, 'Minimum username length is 4'],
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Please add a password'],
      minLength: [8, 'Minimum password length is 8'],
    },
  },
  { timestamps: true }
);

UserSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports = mongoose.model('User', UserSchema);
