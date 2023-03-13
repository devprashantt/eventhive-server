import express from 'express';
import * as user from '../controllers/user.js';

const router = express.Router();

router.get('/', user.getUsers);
router.post('/', user.createUser);

router.get('/:userId', user.getUserById);
router.put('/:userId', user.updateUser);
router.delete('/:userId', user.deleteUser);

export default router;
