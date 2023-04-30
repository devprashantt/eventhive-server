import express from 'express';
import { verifyToken, refreshToken } from '../middleware/tokens.js';

import * as task from '../controllers/task.js';

const router = express.Router();

router.get("/user/tasks/", verifyToken, task.getToDo);
router.post("/user/tasks/save", verifyToken, task.saveToDo);
router.post("/user/tasks/update", task.updateToDo);
router.post("/user/tasks/delete", task.deleteToDo);

export default router;