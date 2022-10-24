const Goal = require('../models/Goal');

const getGoals = async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
};

const createGoal = async (req, res) => {
  const goal = await Goal.create(req.body);
  res.status(201).json(goal);
};

const updateGoal = async (req, res) => {
  const goal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!goal) {
    res.status(404).json({ message: `No goal with id: ${req.params.id}` });
  } else {
    res.status(200).json(goal);
  }
};

const deleteGoal = async (req, res) => {
  const goal = await Goal.findByIdAndRemove(req.params.id);
  if (!goal) {
    res.status(404).json({ message: `No goal with id: ${req.params.id}` });
  } else {
    res.status(200).json(goal);
  }
};

module.exports = {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
};
