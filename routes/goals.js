const { Router } = require('express');
const router = Router();

const {
  getGoals,
  createGoal,
  updateGoal,
  deleteGoal,
} = require('../controllers/goals');

const { reqAuth } = require('../middlewares/auth');

router.route('/').get(reqAuth, getGoals).post(reqAuth, createGoal);
router.route('/:id').put(reqAuth, updateGoal).delete(reqAuth, deleteGoal);

module.exports = router;
