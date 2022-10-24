const mongoose = require('mongoose');

const GoalSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'Please add the text field'],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Goal', GoalSchema);
