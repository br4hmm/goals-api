const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'Please add the text field'],
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Goal', GoalSchema);
