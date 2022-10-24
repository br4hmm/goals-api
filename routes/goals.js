const { Router } = require('express');
const router = Router();

const {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goals');

router.route('/').get(getGoals).post(createGoal);
router.route('/:id').put(updateGoal).delete(deleteGoal);

module.exports = router;
